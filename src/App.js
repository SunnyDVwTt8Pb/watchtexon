
import './App.css';

import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';




function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;



