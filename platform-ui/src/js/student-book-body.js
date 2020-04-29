import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import NewsPiece from './news/news_piece.js';
import Event from './events/event.js';
import Email from './email/email.js';
import Select from 'react-select';
import StudentBookMock from './data_mock/student-book-data-mock.js';

const mock = new StudentBookMock();

class StudentBookBody extends React.Component {
  state = {
    selectedOption: mock.options()[0]
  };

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
    const { selectedOption } = this.state;

    let rows = mock.getModulesByCourseId(selectedOption.value);
    console.log('rows: ', rows);
    console.log('selectedOption: ', selectedOption);
    if (rows && rows.length > 0) {
      console.log('after if rows: ', rows);
      rows = rows
          .map((it) => { return {
            disciplines: mock.getDisciplinesByModuleId(it),
            accumulatedResult: tableRowTitle(mock.getModuleNamebyModuleId(it))
          };})
          .map((it) => {
            let result = [it.accumulatedResult];
            if (it.disciplines && it.disciplines.length > 0) {
              it.disciplines
                  .map((it1) => mock.getDisciplineDataByDisciplineId(it1))
                  .forEach((it1) => {
                    if (it1) {
                      result.push(tableRowData(it1));
                    }
                  });
            }
            console.log('result: ', result);
            return result;
          });
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
            options={mock.options()}
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
  return <tr><td className="text-left" style={{color: '#007AFF'}} colSpan="6">{title}</td></tr>;
};

function tableRowData(discipline) {
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