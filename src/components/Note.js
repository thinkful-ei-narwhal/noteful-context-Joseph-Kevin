import React from 'react';
import Header from './constants/Header';
import Sidebar from './constants/Sidebar';


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