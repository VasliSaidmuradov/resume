import React from 'react'
import Header from './Components/Header/Header'
import Aside from './Components/Aside/Aside'
import './App.scss';
import MainContent from './Components/MainContent/MainContent';

function App(props) {
  return (
    <div className="App">
      <Header person={props.person} />
      <div className='App__content'>
        <Aside />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
