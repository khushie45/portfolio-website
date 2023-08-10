import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Project from './components/Project'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' 
            element={
              <>
                <Header />
                <Home />
                <AboutMe />
                {/* <Skills /> */}
                <Project />
              </>
            } 
          />
        </Routes>
    </Router>
  )
}

export default App