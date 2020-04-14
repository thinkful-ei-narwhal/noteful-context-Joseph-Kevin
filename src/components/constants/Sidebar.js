import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
  let folderLinks = props.folders.map(folder => (
  <li><Link to="/folder">{folder.name}</Link></li>
  ))

  return(
    <div className="sidebar">
      <ul className="folder-list">
        {folderLinks}
      </ul>
      <button>Add Folder</button>
    </div>
    
  )
}