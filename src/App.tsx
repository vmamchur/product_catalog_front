import React from 'react';
import logo from './logo.svg';
import menu from './menu.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <img src={logo} alt="" className="logo" />
        <a href="#menu" className="header__menu">
          <img src={menu} alt="menu" className="icon icon--menu" />
        </a>
      </header>
    </div>
  );
}

export default App;
