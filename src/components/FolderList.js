import React from 'react';
import Header from './constants/Header';
import Sidebar from './constants/Sidebar';


export default function FolderList(props) {


  return(
    <div className="main">
      <Header />
      <Sidebar folders={props.folders}/>
      <p>From FolderList</p>
    </div>
  )
}