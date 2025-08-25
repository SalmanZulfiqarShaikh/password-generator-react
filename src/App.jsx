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
  }
 }, [length, numberAllowed, symbolAllowed,setPassword])

 

  return (
    <>
            <h1 className='text-white text-4xl text-center'> Password Generator </h1>
          
    </>
  )
}

export default App
