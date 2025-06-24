import { useState } from 'react'
import './App.css'
// import './index.css'
import Card from './components/Card.jsx'

function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    username: 'gaurav',
    password: 1234
  }

  let newArr=[1,2,3,4,];

  return (
    <>
      <h1 className='w-lg border-4 border-red-500 bg-green-400 rounded-xl p-4 text-black'>Tailwind</h1>
      {/* <Card channel='chaiOrCode' someObj={myObj} array={newArr}/> */}
      <Card channel='gaurav'/>
    </>
  )
}

export default App
