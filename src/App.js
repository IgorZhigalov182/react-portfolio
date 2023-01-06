import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualitification from './components/qualitification/Qualitification';

const App = () => {
  return(
      <>
        <Header/>
        <main className='main'>
          <Home/>
          <About/>  
          <Skills/>
          <Qualitification/>
        </main>
      </>
  ) 
  }

export default App
