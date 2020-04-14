import React from 'react';

export default function Sidebar(props) {
  return(
    <div className="sidebar">
      <ul className="folder-list">
        <li>Folder 1</li>
        <li>Folder 2</li>
        <li>Folder 3</li>
      </ul>
      <button>Add Folder</button>
    </div>
    
  )
}