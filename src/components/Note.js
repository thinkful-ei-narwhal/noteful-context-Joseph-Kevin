import React from 'react';
import Header from './constants/Header';
import Sidebar from './constants/Sidebar';


export default function Note() {
  return(
    <div className="main">
      <Header />
      <Sidebar />
      <p>From Note</p>
    </div>
  )
}