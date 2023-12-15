import React, { useState } from 'react'
import './App.css'
import Content from './components/Content'
import UseState from './components/UseState'

export const Design= React.createContext()

function App() {
  const [sol, setSol] = useState(false)

  const handleDesign = () => {
    setSol(sol=>!sol)
  }
  return (
    <Design.Provider value={sol}>
      <button className='des' onClick={handleDesign}>Toggle</button>
              <Content/>
            
          </Design.Provider>
  )
}

export default App