import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function PointColleaguesBody() {
  return (
    <section className="section">
      <div className="student-book-header-container">
        <div className="student-book-page-title"><h1>Оценка сотрудников</h1></div>
      </div>
      <div className="content">
        <p style={{textAlign: 'left', color: 'rgba(0, 0, 0, 0.501967)'}}>
          Уважаемые коллеги!<br/>
          В модуле «Оценка сотрудников» доступно оценивание работы сотрудников,
          занимающихся организацией и сопровождением учебного процесса по
          Вашей образовательной программе. Ниже представлен список периодов, в
          рамках которых проводится оценка.Ваши ответы помогут улучшить администрирование
          Вашей образовательной программы и очень важны для оценки качества работы сотрудников,
          занимающихся сопровождением учебного процесса.
        </p>
        <table id="capture" className="table-fill">
          <thead>
            <tr>
            <th className="text-left">Период</th>
            <th className="text-left">Дата начала</th>
            <th className="text-left">Дата окончания</th>
            <th className="text-left">Статус</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {tableRowData({
              dateRange: '1 модуль 2019/2020 учебного года',
              dateBegin: '17:00 06.06.2019 г. по московскому времени',
              dateEnd: '23:59 30.06.2019 г. по московскому времени',
              status: 'СОП завершен, анкета заполнена'
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function tableRowData(pointColleaguesData) {
  return <tr>
      <td className="text-left">{pointColleaguesData.dateRange}</td>
      <td className="text-left" style={{color: '#007AFF'}}>{pointColleaguesData.dateBegin}</td>
      <td className="text-left" style={{color: '#007AFF'}}>{pointColleaguesData.dateEnd}</td>
      <td className="text-left">{pointColleaguesData.status}</td>
    </tr>;
};

export default PointColleaguesBody;
