import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function PointYourCoursesBody() {
  return (
    <section className="section">
      <div className="student-book-header-container">
        <div className="student-book-page-title"><h1>Оцени свои курсы</h1></div>
      </div>
      <div className="content">
        <p style={{textAlign: 'left', color: 'rgba(0, 0, 0, 0.501967)'}}>
          Уважаемый студент!<br/>
          Вам предстоит принять участие в студенческой оценке качества преподавания.
          Оценка проводится, чтобы студенты могли выразить свое мнение об организации
          учебного процесса на своей образовательной программе, высказать предложения
          по конкретным учебным дисциплинам и оставить комментарии касательно проведения
          занятий преподавателями.
          Результаты оценки учитываются руководством факультетов, департаментов и
          кафедр при принятии решений об изменении содержания учебных курсов и
          организации процесса обучения. Обратите внимание, что в соответствии с
          Правилами внутреннего распорядка НИУ ВШЭ участие студентов в оценке качества
          преподавания обязательно. Ваши ответы полностью анонимны, результаты
          передаются руководству факультетов, департаментов, кафедр только в обобщенном виде.
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
              dateBegin: '20:00 30.09.2019 г. по московскому времени',
              dateEnd: '23:59 20.10.2019 г. по московскому времени',
              status: 'СОП завершен, анкета заполнена'
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function tableRowData(courseData) {
  return <tr>
      <td className="text-left">{courseData.dateRange}</td>
      <td className="text-left" style={{color: '#007AFF'}}>{courseData.dateBegin}</td>
      <td className="text-left" style={{color: '#007AFF'}}>{courseData.dateEnd}</td>
      <td className="text-left">{courseData.status}</td>
    </tr>;
};

export default PointYourCoursesBody;
