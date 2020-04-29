import React from 'react';
import NewsPiece from './news/news_piece.js';
import Event from './events/event.js';
import Email from './email/email.js';
import Select from 'react-select';

const options = [
  { value: 'course-one', label: '1 курс' },
  { value: 'course-two', label: '2 курс' },
  { value: 'course-three', label: '3 курс' },
  { value: 'course-four', label: '4 курс' },
  { value: 'course-five', label: '5 курс' },
];

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
  state = {
    selectedOption: options[0],
    selectedContent: null
  };

  handleChange = selectedOption => {
    this.setState(
      { 
        selectedOption,
        selectedContent: null
      },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  handleClick = selectedContentKey => {
    let newSelectedContent = null;
    if (this.state.selectedOption) {
      let selectedContentsMap = dataMap.get(this.state.selectedOption.value);
      console.log(`content option selected:`, this.state.selectedOption.value);
      if (selectedContentsMap && selectedContentsMap.size > 0) {
        console.log(`selected content map selected:`, selectedContentsMap);
        newSelectedContent = selectedContentsMap.get(selectedContentKey);
      }
    }
    console.log(`content key selected:`, selectedContentKey);
    this.setState(
      { selectedContent: newSelectedContent },
      () => console.log(`content selected:`, this.state.selectedContent)
    );
  };

  render(props) {
    const { selectedOption } = this.state;
    const listItems = Array.from(dataMap.get(selectedOption.value).entries()).map((item) => {
        console.log(item);
        return <div className="course-content-item"><li key={item[0]} onClick={()=>this.handleClick(item[0])}>{item[0]}</li></div>
      }
    );

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
            <ul className="course-content">{listItems}</ul>
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