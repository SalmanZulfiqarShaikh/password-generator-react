import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [length, lengthSetter] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
 const [symbolAllowed, setSymbolAllowed] = useState(false);
 const [password, setPassword] = useState('');

 const generatePassword = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(numberAllowed){ str += "0123456789";} 
  if(symbolAllowed){str += "!@#$%^&*()_+";}

  for(i = 1; i<=length; i++){
    let char = Math.floor(Math.random()*str.length + 1);
    pass += str.charAt(char);
    setPassword(pass);
  }
 }, [length, numberAllowed, symbolAllowed,setPassword])

 

  return (
    <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-9 my-8 text-orange-400 bg-gray-700'>
        <h3 className='text-amber-300 text-shadow-black text-center mb-9 font-black'>
          Random Password Generator
        </h3>

        {/* Input + Button Row */}
        <div className='flex shadow rounded-lg overflow-hidden mb-6 gap-2'>
          <input
            type="text"
            className='w-full px-3 py-2 text-yellow-300 bg-amber-900 rounded-2xl cursor-pointer'
            placeholder='Password'
            readOnly
            value={password}
          />
          <button
            className='bg-orange-400 text-yellow-200 px-3 py-2 hover:bg-orange-500 rounded-2xl cursor-pointer'
            
          >
            Copy
          </button>
        </div>

        {/* Length Slider Row */}
        <div className='flex items-center gap-3 mb-6'>
          <label className='text-white font-semibold'>Length:</label>
          <input
            type="range"
            min={4}
            max={32}
            value={length}
            onChange={(e) => lengthSetter(e.target.value)}
            className='cursor-pointer w-full accent-orange-500'
          />
          <span className='text-white font-bold'>{length}</span>
        </div>

        {/* Options */}
<div className='flex items-center justify-evenly gap-6 mt-4'>
  <label className='flex items-center gap-2'>
    <input
      type="checkbox"
      checked={numberAllowed}
      onChange={() => setNumberAllowed(!numberAllowed)}
      className='cursor-pointer'
    />
    Numbers
  </label>

  <label className='flex items-center gap-2'>
    <input
      type="checkbox"
      checked={symbolAllowed}
      onChange={() => setSymbolAllowed(!symbolAllowed)}
      className='cursor-pointer'
    />
    Symbols
  </label>
</div>

      </div>
</>

  )
}

export default App
