import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function ChooseCourseBody() {
  return (
    <section className="section">
      <div className="student-book-header-container">
        <div className="student-book-page-title" style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            position: 'relative',
            width: '85%',
            marginBottom: '0px'
          }}>Курсы по выбору</h1>
          <a href="#" className="square_btn" style={{
            maxHeight: '20px',
            width: '15%'
          }}>Выбрать курс</a>
        </div>
      </div>
      <div className="content">
        <div style={{
          color: 'rgba(0, 0, 0, 0.5)', width: '100%',
          textAlign: 'left', paddingLeft: '10px', paddingBottom: '10px'
        }}>
          Всего кредитов: <div style={{display: 'inline-block', color: '#000'}}>60</div>
        </div>
        <div style={{
          color: 'rgba(0, 0, 0, 0.5)', width: '100%',
          textAlign: 'left', paddingLeft: '10px', paddingBottom: '10px'
        }}>
          Выбрано кредитов: <div style={{display: 'inline-block', color: '#000'}}>0</div>
        </div>
        <div style={{color: 'rgba(0, 0, 0, 0.5)', width: '100%', textAlign: 'left', paddingLeft: '10px'}}>
          Необходимо кредитов: <div style={{display: 'inline-block', color: '#000'}}>60</div>
        </div>
      </div>
    </section>
  );
}

export default ChooseCourseBody;
