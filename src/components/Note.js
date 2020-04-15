import React from 'react';
import { Link } from 'react-router-dom';
import StateContext from './StateContext';



export default class Note extends React.Component {
  
  static contextType = StateContext;

  render() {
    const {handleDelete} = this.context;
    return(
      <div className="main">
        <div id={this.props.id} className="note-item" >
          <h2>{this.props.title}</h2>
          <Link to={`note/${this.props.id}`}>Expand Me</Link>
          <p>{this.props.modified}</p>
          <button type='button' className='deleteButton' onClick={() => handleDelete(this.props.id)}>Delete Me!</button>
        </div>
      </div>
    )
  }


}