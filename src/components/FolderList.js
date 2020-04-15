import React from 'react';
import Note from './Note';
import StateContext from './StateContext';


export default class FolderList extends React.Component {
  static contextType = StateContext;

  render() {
    const { notes } = this.context;
    return(
      <div className="main">
      {
        notes.filter(note => (
          note.folderId === this.props.match.params.id
        )).map(note => (
          <Note 
              key={note.id}
              id={note.id}
              title={note.name}
              modified={note.modified}/>
        ))
      }
    </div>
  )}
}