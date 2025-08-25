import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, lengthSetter] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
 const [symbolAllowed, setSymbolAllowed] = useState(true);

  return (
    <>
            <h1 className='text-white text-4xl text-center'> Password Generator </h1>
          
    </>
  )
}

export default App
