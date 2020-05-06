import React from 'react';

function NewsPiece(props) {
  return (
  	<div className="card-box">
      <div className="news-piece-card-header">
        <div className="news-piece-card-title">
          <h2>{props.title}</h2>
        </div>
        <div className="news-piece-card-time"><p>{props.time}</p></div>
      </div>
      <div className="news-piece-card-content">
      <p dangerouslySetInnerHTML={{__html: props.content}}></p>
      </div>
    </div>
  );
}

export default NewsPiece;
