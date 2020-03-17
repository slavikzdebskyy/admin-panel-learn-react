import React from 'react';
import {
  BrowserRouter,
} from "react-router-dom";

import {Provider} from "react-redux";
import store from "./store/store";

import Header from './layout/Header';
import Routes from './components/Routes/Routes';
import './App.scss';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <div className="app-container">
          <div className="main-container">
            <Routes/>
          </div>
        </div>
        <footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
