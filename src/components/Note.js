import React from 'react';

export default function Note(props) {
  return(
    <div className="main">
      <div id={props.id} className="note-items">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  )
}