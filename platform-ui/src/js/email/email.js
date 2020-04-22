import React from 'react';

function Email(props) {
  return (
  	<div className="email-card-box">
      <div className="email-card-header">
        <div className="email-card-author"><p>{props.author}</p></div>
        <div className="email-card-status-time">
          {props.status == 'NEW' && <div className="email-card-status"></div>}
          <div className="email-card-time"><p>{props.time}</p></div>
        </div>
      </div>
      <div className="email-card-title">
        <h3>{props.title}</h3>
      </div>
      <div className="email-card-content">
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Email;