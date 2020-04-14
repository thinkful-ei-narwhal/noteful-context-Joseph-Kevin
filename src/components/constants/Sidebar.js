import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar(props) {
  let folderLinks = props.state.folders.map(folder => (
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