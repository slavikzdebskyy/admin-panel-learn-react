import React from 'react';

import Header from './layaot/Header';
import SideBar from './layaot/Side-bar';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <SideBar />
      </div>
    </div>   
  );
}

export default App;
