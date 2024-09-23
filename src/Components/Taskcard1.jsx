import React from 'react'

const Taskcard1 = ({image, text, points, btext}) => {
  return (
    <div className='border border-amber-400 rounded-xl text-white'>
      <div className='p-2'>
        <img src={image} alt="card image" className='m-auto w-12 my-2'/>
      <p className='text-sm'>{text}</p>
      <p className='text-[#FEC95E] text-xs'>{points} </p>
      </div>
    <button className=' bg-gradient-to-b from-[#F0D377] to-[#F1A35F] text-[#210133] w-full rounded-b-xl'>{btext}</button>

    </div>
  )
}

export default Taskcard1