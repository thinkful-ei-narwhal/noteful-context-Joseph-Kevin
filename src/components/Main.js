import React from 'react';
import Note from './Note';
import StateContext from './StateContext';

export default class Main extends React.Component {
  static contextType = StateContext;
  
  render(){
    const { notes } = this.context;
    return(    
      <div className="main">
        {
          notes.map(note => (
            <Note 
              key={note.id}
              id={note.id}
              title={note.name}
              modified={note.modified}/>
          ))
        }
      </div>
    )
  }
}
  