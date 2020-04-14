import React from 'react';

export default function ExpandedNote(props){
  let note = props.state.notes.find(note => (
    note.id === props.match.params.id
  ))
  

  return (
    <div className="note-item">
      <h3>{note.name}</h3>
      <p>{note.modified}</p>
      <p>{note.content}</p>
    </div>
  )
}