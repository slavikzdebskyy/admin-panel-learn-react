import React from 'react';

import Header from './layout/Header';
import SideBar from './layout/Side-bar';

import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <SideBar />
      </div>
        <footer/>
    </div>   
  );
}

export default App;
