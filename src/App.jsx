import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Use State intitial conditions(number selected,sysmbols not selected,length 8)

  const [length, lengthSetter] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
 const [symbolAllowed, setSymbolAllowed] = useState(false);
 const [password, setPassword] = useState('');
 const [copied, setCopied] = useState(false); // copy state



 //useRef hook to select the input field
 const passwordRef = useRef(null)
// function to copy the password to clipboard
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    navigator.clipboard.writeText(password);
    setCopied(true);

    // reset after 5 sec
    setTimeout(() => setCopied(false), 5000);
  }, [password]);


// Function to generate password (using callback hook to memoize the function){dependencies shit}
 const generatePassword = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  // check if numbers or symbols are allowed
  if(numberAllowed){ str += "0123456789";} 
  if(symbolAllowed){str += "!@#$%^&*()_+";}
// loop that runs for the length of the password
  for(let i = 1; i<=length; i++){
    let char = Math.floor(Math.random()*str.length + 1);
    pass += str.charAt(char);
  } 
  setPassword(pass);

  // dependencies hai neechay if any change generate for optimat
 }, [length, numberAllowed, symbolAllowed,setPassword])



//useEffect is used when litreally even the samallest of changess will happen in the dependencies
 useEffect(()=>{
  generatePassword()
  setCopied(false);
 }, [length, numberAllowed, symbolAllowed, generatePassword])
 

  return (
    // our html
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
            ref={passwordRef}
          />
          <button  onClick={copyPassword}
            className='bg-orange-400 text-yellow-200 px-3 py-2 hover:bg-orange-500 rounded-2xl cursor-pointer'// onClick event to copy the password // show copied if copied is true else show copy
          >
            {copied ? "Copied!" : "Copy"} 
          </button>  
        </div>

        {/* Length Slider Row */}
        <div className='flex items-center gap-3 mb-6'>
          <label className='text-white font-semibold'>Length:</label>
          <input
            type="range"
            min={4} // minimum length of password
            max={32} // maximum length of password
            value={length} // length set through slider(initially 8)
            onChange={(e) => lengthSetter(e.target.value)} // on change event to set the length
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
      onChange={() => setNumberAllowed(!numberAllowed)} // toggle number allowed
      className='cursor-pointer'
    />
    Numbers
  </label>

  <label className='flex items-center gap-2'>
    <input
      type="checkbox"
      checked={symbolAllowed}
      onChange={() => setSymbolAllowed(!symbolAllowed)} // toggle symbol allowed
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
