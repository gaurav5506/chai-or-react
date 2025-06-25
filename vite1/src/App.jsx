import {useState}from 'react';

function App() {
  
  const [value,setValue]= useState(1)
  const [MultipliedValue,setMultipliedValue]= useState(1)

  const MultiplyByFive=()=>{
    setMultipliedValue(value*5)
    setValue(value+1)
  }

  return(
  <>
    <h1>Main value: {value}</h1>
    <button onClick={MultiplyByFive}>Click to multiply by 5</button>
    <h2>multiplied value: {MultipliedValue}</h2>
    </>

    )  
  
}

export default App
