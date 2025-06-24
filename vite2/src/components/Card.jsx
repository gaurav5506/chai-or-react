import React from 'react'

function Card({channel}) {
    // console.log('props',props);
  return (
    <>
      <div className='relative w-lg border-4 border-red-500 bg-green-400 rounded-xl p-4 text-black text-[10px]'>helllo
    <h1 className='absolute text-white '>Name:{channel}</h1>
    <img className= ' w-100 ' src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg" alt=""/>
    </div>
    </>
  )
}

export default Card