import React from 'react';

function Event(props) {
  let typeValue = null;
  let typeColor = null;
  switch (props.type) {
    case 'EVENT':
      typeValue = 'МЕРОПРИЯТИЕ';
      typeColor = '#0579FF';
      break;
    case 'DEADLINE':
      typeValue = 'ДЕДЛАЙН';
      typeColor = '#FF4701';
      break;
  }
  return (
  	<div className="card-box">
      <div className="events-card-img">
        <img src={props.image}></img>
      </div>
      <div className="events-card-header">
        <h3>{props.header}</h3>
      </div>
      <div className="events-card-content">
        <p>{props.content}</p>
      </div>
      <div className="events-card-type" style={{background: typeColor}}>
        <p>{typeValue}</p>
      </div>
    </div>
  );
}

export default Event;