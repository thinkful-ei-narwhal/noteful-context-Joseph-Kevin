import React from 'react';
import Note from './Note';

export default function Main(props) {
  let displayNotes = props.notes.map(note => (
      <Note 
        key={note.id}
        note={note.id}
        title={note.name}
        content={note.content}/>
    ))
  
  return(    
    <div className="main">
      {displayNotes}
    </div>
  )
}