import React, { useState } from 'react'
import './App.css'

import Ej1 from './Ej1.jsx'
import Home from './Home.jsx'
import CounterFunc from './components/CounterFunc.jsx'

function App() {

  const [activeComponent, setActiveComponent] = useState('home')
  const showComponent = (component) => () => setActiveComponent(component);

  return (
    <div className="App">
      <nav>
        <button onClick={showComponent('home')}>Home</button>
        <button onClick={showComponent('ej1')}>Ej1</button>
        <button onClick={showComponent('counter')}>CounterFunc</button>
      </nav>
      <main>
        {activeComponent === 'home' && <Home />}
        {activeComponent === 'ej1' && <Ej1 />}
        {activeComponent === 'counter' && <CounterFunc initialValue={10} />}
      </main>
    </div>
  )
}
export default App