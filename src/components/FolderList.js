import React from 'react';
import Header from './constants/Header';
import Sidebar from './constants/Sidebar';


export default function FolderList() {
  return(
    <div className="main">
      <Header />
      <Sidebar />
      <p>From FolderList</p>
    </div>
  )
}