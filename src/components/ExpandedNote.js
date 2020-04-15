import React from 'react';
import StateContext from './StateContext';
import { render } from '@testing-library/react';

export default class ExpandedNote extends React.Component {
  static contextType = StateContext;
  
  render() {
    const { notes } = this.context;
    let note = notes.find(note => (
      note.id === this.props.match.params.id
    ))
    return (
      <div className="note-item">
        <h3>{note.name}</h3>
        <p>{note.modified}</p>
        <p>{note.content}</p>
      </div>
    )
  } 
}