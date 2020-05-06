import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function BkpKpBody() {
  return (
    <section className="section">
      <div className="student-book-header-container">
        <div className="student-book-page-title"><h1>Мои работы (ВКР/КР/Проект)</h1></div>
      </div>
      <div className="content">
        <table id="capture" className="table-fill">
          <thead>
            <tr>
            <th className="text-left">Календарный период</th>
            <th className="text-left">Тип работы</th>
            <th className="text-left">Тема</th>
            <th className="text-left">Тема на английском</th>
            <th className="text-left">Загружено</th>
            <th className="text-left">Процент заимствований</th>
            <th className="text-left">Статус проверки</th>
            <th className="text-left">Оценка</th>
            <th className="text-left">Отзыв</th>
            <th className="text-left">Рецензия</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {tableRowData({
              dateRange: '2018/2019 учебный год',
              jobType: 'Проект',
              theme: '3 курс',
              themeEng: '',
              downloaded: 'Нет',
              percentOrigin: '',
              checkStatus: '',
              point: '9',
              review: '',
              critique: '',
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function tableRowData(bkpKpData) {
  return <tr>
      <td className="text-left">{bkpKpData.dateRange}</td>
      <td className="text-left">{bkpKpData.jobType}</td>
      <td className="text-left">{bkpKpData.theme}</td>
      <td className="text-left">{bkpKpData.themeEng}</td>
      <td className="text-left">{bkpKpData.downloaded}</td>
      <td className="text-left">{bkpKpData.percentOrigin}</td>
      <td className="text-left">{bkpKpData.checkStatus}</td>
      <td className="text-left">{bkpKpData.point}</td>
      <td className="text-left">{bkpKpData.review}</td>
      <td className="text-left">{bkpKpData.critique}</td>
    </tr>;
};

export default BkpKpBody;
