import {useState}from 'react';

function App() {
  // let counter=5
  let [counter,setcounter]=useState(0)
  let min=0;
  let max=10;

  const addvalue=()=>{
    if(counter < max){
    // setcounter(counter+1)
    setcounter(counter+1)
  }
}
  const removevalue=()=>{
    if(counter > min){
    setcounter(counter-1)
  }
}

  return (
    <>
    <h1>A Counter App </h1>
    <h2>counter value: {counter}</h2>

    <button onClick={addvalue} disabled={counter===max}>add value</button>
    <button onClick={removevalue} disabled={counter===min}>remove value</button>
    <p>{counter}</p>
    </>
  )
}

export default App
