import React from 'react';
import { Link } from 'react-router-dom';

export default function Note(props) {
  return(
    <div className="main">
      <div id={props.id} className="note-item" >
        <h2>{props.title}</h2>
        <Link to={`note/${props.id}`}>Expand Me</Link>
        <p>{props.modified}</p>
      </div>
    </div>
  )
}