import React from 'react';
import Header from './constants/Header';
import Sidebar from './constants/Sidebar';

export default function Main() {
  return(
    <div className="main">
      <Header />
      <Sidebar />
      <p>From Main</p>
    </div>
  )
}