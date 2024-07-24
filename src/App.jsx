import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Ej1 from './Ej1.jsx'
import Home from './Home.jsx'
import CounterFunc from './components/CounterFunc.jsx'
import GreetingFunc from './components/GreetingFunc.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/greeting">Greeting</Link>
          <Link to="/ej1">Person</Link>
          <Link to="/counter">Counter</Link>
        </nav>
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greeting" element={<GreetingFunc username="Euralio"/>} />
          <Route path="/ej1" element={<Ej1 />} />
          <Route path="/counter" element={<CounterFunc initialValue={10}/>} />
        </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
export default App