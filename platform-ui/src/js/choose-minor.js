import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function ChooseMinorBody() {
  return (
    <section className="section">
      <div className="student-book-header-container">
        <div className="student-book-page-title"><h1>Выбор майнора</h1></div>
      </div>
      <div className="content">
        <div style={{backgroundColor: '#FFFFFF', borderRadius: '8px'}}>
          <p style={{
            color: '#0579FF',
            fontSize: '16px',
            lineHeight: '19px',
            letterSpacing: '-0.385882px',
            textAlign: 'left',
            marginLeft: '21px'
          }}>Вы обучаетесь на майноре: 2016 Стартап: дизайн нового бизнеса</p>
        </div>
        <div style={{backgroundColor: '#FFFFFF', borderRadius: '8px', marginTop: '32px', display: 'flex', justifyItems: 'left'}}>
          <img style={{
            width: '20px',
            height: '20px',
            verticalAlign: 'middle',
            display: 'inline-block',
            paddingLeft: '10px',
            marginTop: '15px',
            marginBottom: '15px'
          }} src='/warning.png'/>
          <p style={{
            textAlign: 'left',
            display: 'inline-block',
            color: '#E02020',
            left: '25px',
            fontSize: '16px',
            lineHeight: '19px',
            letterSpacing: '-0.385882px',
            textAlign: 'left',
            marginLeft: '10px',
            verticalAlign: 'middle'
          }}>Выбор майноров не доступен, по всем вопросам просьба обращаться в учебный офис.</p>
        </div>
      </div>
    </section>
  );
}

export default ChooseMinorBody;
