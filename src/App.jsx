import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Project from './components/Project'
import ContactForm from './components/ContactForm'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' 
            element={
              <>
                <div className='toaster'>
                  <Toaster
                    position="top-center"
                  />
                </div>
                <Header />
                <Home />
                <AboutMe />
                <Project />
                <Skills />
                <ContactForm />
              </>
            } 
          />
        </Routes>
    </Router>
  )
}

export default App