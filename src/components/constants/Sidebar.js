import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
  let folderLinks = props.state.folders.map(folder => (
  <li key={folder.id}><a href={`/folders/${folder.id}`}>{folder.name}</a></li>
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