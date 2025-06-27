import { useState,useCallback } from 'react'
import './App.css'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [passAllowed,setPass ]=useState("")

  const passGen=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  },[length,numberAllowed,charAllowed,setPass])

  if(numberAllowed) str+= "0123456789"
  if(charAllowed) str+= "!@#$%^&*()"

  for(let i=1;i<=array.length;i++){
    // const element=array[i];
    let char=Math.floor(Math.random()*str.length+1) 
    pass=str.charAt(char)
    setPass(pass)
  }

  return (
    <>
     <h1 className='text-white text-center text-4xl'>Password Generator</h1>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gra\' 
     
     >dd</div>
    
    </>
  )
    let str=""
}

export default App
