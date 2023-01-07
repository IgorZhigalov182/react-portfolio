import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualitification from './components/qualitification/Qualitification';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';

const App = () => {
  return(
      <>
        <Header/>
        <main className='main'>
          <Home/>
          <About/>  
          <Skills/>
          <Qualitification/>
          <Work/>
          <Contact/>
        </main>
      </>
  ) 
  }

export default App
