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
            <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my8 text-orange-400 bg-gray-700'>
              <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input type="text" className='w-full px-3 py-2 text-yellow-300' placeholder='Password' readOnly value={password} />
                <button className='bg-orange-400 text-yellow-200 px-3 py-2 hover:bg-orange-500' onClick={generatePassword}>Copy</button>
              </div>
            </div>
          
    </>
  )
}

export default App
