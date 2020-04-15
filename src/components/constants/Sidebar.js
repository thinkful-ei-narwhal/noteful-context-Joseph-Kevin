import React from 'react';
import { NavLink } from 'react-router-dom';
import StateContext from '../StateContext';
import { render } from '@testing-library/react';


export default class Sidebar extends React.Component {

  static contextType = StateContext;

  render() {
    const {folders} = this.context;
    let folderLinks = folders.map(folder => (
      <span className="nav-item"><NavLink key={folder.id} to={`/folders/${folder.id}`} activeClassName="selected">{folder.name}</NavLink></span>
      ))

    return(
      <div className="sidebar">
        <nav>
          {folderLinks}
        </nav>
        <button>Add Folder</button>
      </div>
    )
  }

}