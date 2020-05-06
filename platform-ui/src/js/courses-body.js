import React from 'react';
import NewsPiece from './news/news_piece.js';
import Event from './events/event.js';
import Email from './email/email.js';
import Select from 'react-select';
import axios from 'axios'
import { loadAllDisciplines, handleError } from './data-loader.js'
import { coursesMapProcessor } from './data-utils.js'

const dataMap = new Map([
  ['course-one', new Map([])],
  ['course-two', new Map([])],
  ['course-three', new Map([])],
  ['course-four', new Map([
    ['Дизайн, Бакалавриат, 4 курс', 'https://drive.google.com/file/d/1sBtDeEN_2jwG8WdcfMmWD81RQvC2C6mv/preview'],
    ['Contemporary Design 2019 уч. год 4 курс (код 11345)', 'https://drive.google.com/file/d/1JuJ4vcLPheMCbHqR-YWTJ6DOatD2Y26B/preview'],
    ['Академическое письмо на английском языке 2019 уч. год Б 4 курс (код 113453)', 'https://drive.google.com/file/d/1Zvi1l0hvCynYJhPXt8nRcW6FTKTT7X7k/preview']
  ])],
  ['course-five', new Map([])]
]);

class CoursesBody extends React.Component {

  componentWillMount() {
    let coursesMapTmp;
    handleError(
      loadAllDisciplines((coursesMap) => {
        coursesMapTmp = coursesMap;
      }).then(response => axios.get('http://localhost:3000/railsapp/materials.json', {withCredentials: true}))
        .then(response => {
          console.log('materials response - ', response);
          coursesMapProcessor(coursesMapTmp, (course, mod, discipline) => {
            for (let material of response.data) {
              if (!discipline.materials) {
                discipline.materials = [];
              }
              console.log('material pushing into - ', discipline);
              console.log('material pushing - ', material);
              if (material.discipline_id && discipline.disciplineId === material.discipline_id) {
                console.log('materials pushed - ', material);
                discipline.materials.push(material);
              }
            }
          })

          let options = Array.from(coursesMapTmp.entries()).map(pair => {
            return {
              value: pair[1].courseId,
              label: pair[1].courseName
            }
          });

          this.setState({
            coursesMap: coursesMapTmp,
            selectedOption: options[0],
            options: options
          })
        })
    )
  }

  state = {
    coursesMap: null,
    selectedOption: null,
    selectedContent: null
  };

  handleChange = selectedOption => {
    console.log(`Option selected this state:`, this.state)
    this.setState(
      {
        selectedOption: selectedOption,
        selectedContent: null
      },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  handleClick = selectedContentKey => {
    let newSelectedContent = null;
    if (this.state.selectedOption) {
      for (let mod of this.state.coursesMap.get(this.state.selectedOption.value).modsMap.values()) {
        let found = false;
        for (let discipline of mod.disciplinesMap.values()) {
          for (let material of discipline.materials) {
            if (material.id === selectedContentKey) {
              newSelectedContent = material.url;
              found = true;
              break;
            }
            if (found) break;
          }
          if (found) break;
        }
      };
    }
    console.log(`content key selected:`, selectedContentKey);
    this.setState(
      { selectedContent: newSelectedContent },
      () => console.log(`content selected:`, this.state.selectedContent)
    );
  };

  render(props) {
    const { selectedOption, coursesMap, options } = this.state;

    if (!selectedOption || !coursesMap) {
      return <div></div>;
    }

    let mats = [];
    console.log('selected option value - ', selectedOption.value);
    console.log('selected option state - ', coursesMap);
    let listItemst = Array.from(coursesMap.get(selectedOption.value).modsMap.values())
      .forEach(mod => {Array.from(mod.disciplinesMap.values()).forEach(discipline => {
          discipline.materials.forEach(material => {
            console.log('material drawed - ', material);
            console.log('material drawed in discipline - ', discipline);
            mats.push(<div className="course-content-item">
              <li key={material.id} onClick={()=>this.handleClick(material.id)}>{material.name}</li>
            </div>);
          })
        })
      });

      console.log('mats - ', mats);

    return (
    <section className="section">

      <h1 className="page-title">Мои курсы</h1>
      <div className="content">
        <div className="main">
          <div className="main-left">
            <Select
              styles={{borderRadius: '14px'}}
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
              classNamePrefix="courses-combo-box"
            />
            <ul className="course-content">{mats}</ul>
          </div>
          <div className="main-right">
            {this.state.selectedContent && <embed src={this.state.selectedContent} height="659px" type="application/pdf" />}
          </div>
        </div>
      </div>
    </section>
  );
  }
}

export default CoursesBody;
