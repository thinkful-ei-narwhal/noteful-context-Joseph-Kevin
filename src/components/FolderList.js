import React from 'react';
import Note from './Note';


export default function FolderList(props) {
  let folderToDisplay = props.state.folders.find(folder => (
    folder.id === props.match.params.id
  ))

  let displayNotes = props.state.notes.filter(note => (
    note.folderId === folderToDisplay.id
  )).map(note => (
    <Note 
        key={note.id}
        note={note.id}
        title={note.name}
        content={note.content}/>
  ))

  return(
    <div className="main">
      <h3>{folderToDisplay.name}</h3>
      {displayNotes}
    </div>
  )
}