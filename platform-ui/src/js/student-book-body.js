import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import NewsPiece from './news/news_piece.js';
import Event from './events/event.js';
import Email from './email/email.js';
import Select from 'react-select';
import StudentBookMock from './data_mock/student-book-data-mock.js';
import axios from 'axios'
import { loadAllDisciplines, loadUsersById, handleError } from './data-loader.js'
import { coursesMapProcessor } from './data-utils.js'


const mock = new StudentBookMock();

class StudentBookBody extends React.Component {

  state = {
    coursesMap: null,
    selectedOption: null,
    options: null
  };

  componentWillMount() {
    handleError(
      loadAllDisciplines((coursesMap) => {
        this.setState({
          coursesMap: coursesMap
        });
      }).then(response => axios.get('http://localhost:3000/railsapp/marks.json', {withCredentials: true}))
        .then(response => {
          let r = response.data;
          console.log('marks - ', r);
          let marks = new Set();
          Array.from(this.state.coursesMap.values()).map(course => {
            Array.from(course.modsMap.values()).map(modsVal => {
              r.map(mark => {
                let discipline = modsVal.disciplinesMap.get(mark.discipline_id);
                if (discipline && !discipline.marks.includes(mark)) {
                  marks.add(mark);
                  discipline.marks.push(mark);
                }
              })
            })
            return course;
          })
          let rs = [];

          for (let m of marks) {
            if (!m.teacher_id) continue;
            rs.push(m.teacher_id);
          }
          return loadUsersById(rs, (usersMap) => {
            coursesMapProcessor(this.state.coursesMap, (course, mod, discipline) => {
              for (let mark of discipline.marks) {
                if (mark.teacher_id) {
                  let user = usersMap.get(mark.teacher_id);
                  if (user) {
                    mark.teacherName = user.firstName + " " + user.lastName
                  }
                }
              }
            });

            let options = Array.from(this.state.coursesMap.entries()).map(pair => {
              return {
                value: pair[1].courseId,
                label: pair[1].courseName
              }
            });
            console.log('options - ', options);
            this.setState({
              selectedOption: options[0],
              options: options
            })
          });
        })
    )
  }

  handleChange = selectedOption => {
    this.setState(
      {
        selectedOption
      }
    );
  };

  printTable() {
    console.log('print table');
    const input = document.getElementById('capture');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("download.pdf");
    });
  }

  render(props) {
    const { selectedOption, coursesMap } = this.state;
    if (!selectedOption) {
      return <div></div>;
    }

    let course = coursesMap.get(selectedOption.value);
    let rows = [];
    if (course) {
      Array.from(course.modsMap.values()).map(mod => {
        rows.push(tableRowTitle(mod.modName));
        Array.from(mod.disciplinesMap.values()).map(discipline =>
          rows.push(tableRowData(discipline))
        )
      })
    }

    return (
    <section className="section">
      <div className="student-book-header-container">
        <div className="student-book-page-title"><h1>Зачетка</h1></div>
        <div className="student-book-combo-box-container">
          <Select
            styles={{borderRadius: '14px'}}
            value={selectedOption}
            onChange={this.handleChange}
            options={this.state.options}
            classNamePrefix="student-book-combo-box"
          />
        </div>
      </div>
      <div className="student-book-description-container">
        <div className="student-book-description-left">
          <div>Факультет коммуникаций, медиа и дизайна : Дизайн</div>
          <div>Залесова Анастасия Дмитриевна</div>
          <div>Студент бакалавриата, 4 курс</div>
        </div>
        <div className="student-book-description-right">
          <div><div className="student-book-description-paragraph">Рейтинг:</div> {mock.getCourseStats().rateCurrent} из {mock.getCourseStats().rateMax}</div>
          <div><div className="student-book-description-paragraph">Перцентиль по программе:</div> {mock.getCourseStats().percentile}</div>
          <div><div className="student-book-description-paragraph">Средний балл:</div> {mock.getCourseStats().pointAvg}</div>
        </div>
      </div>
      <div className="content">
        <table id="capture" className="table-fill">
          <thead>
            <tr>
            <th className="text-left" style={{width: '45%'}}>Дисциплина</th>
            <th className="text-center">10-ти бальная</th>
            <th className="text-center">5-ти бальная</th>
            <th className="text-center">Пересдачи</th>
            <th className="text-center">Последняя сдача</th>
            <th className="text-center">Преподаватель</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {rows}
          </tbody>
        </table>
      </div>
    </section>
  );
  }
}

function tableRowTitle(title) {
  console.log('title - ', title);
  return <tr><td className="text-left" style={{color: '#007AFF'}} colSpan="6">{title}</td></tr>;
};

function tableRowData(disciplineIn) {
  let marks = disciplineIn.marks;
  let marksLength = marks.length;
  let marksMoreThanZero = marksLength > 0;
  let tenPointSystemPoint = 0;
  marks.map(m => tenPointSystemPoint += m.value);
  tenPointSystemPoint = marksMoreThanZero ? tenPointSystemPoint / marksLength : 0;

  let fivePointSystemPoint = marksMoreThanZero ? tenPointSystemPoint / 2 : 0;
  for (let m of marks) {
    if (m.teacherName) {
      console.log('teacher name - ', m.teacherName);
    }
  }
  let discipline = {
    name: disciplineIn.disciplineName,
    retries: marksLength > 0 ? marksLength - 1 : 0,
    tenPointSystem: tenPointSystemPoint,
    fivePointSystem: fivePointSystemPoint.toFixed(),
    lastTry: marksMoreThanZero ? new Date(marks[marksLength - 1].created_at).toLocaleDateString("en-US") : 'нет',
    teacher: marksMoreThanZero ? marks[marksLength - 1].teacherName : null
  };
  return <tr>
      <td className="text-left">{discipline.name}</td>
      <td className="text-center">{discipline.tenPointSystem}</td>
      <td className="text-center">{discipline.fivePointSystem}</td>
      <td className="text-center">{discipline.retries}</td>
      <td className="text-center">{discipline.lastTry}</td>
      <td className="text-center">{discipline.teacher}</td>
    </tr>;
};

export default StudentBookBody;
