import { useState } from 'react'
import './App.css'
// import './index.css'
import Cards from './components/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h1 className= 'w-lg border-4 border-red-500 bg-green-400 rounded-xl p-4 text-black'>Tailwind</h1>
    <Cards/>
    </>
  )
}

export default App
