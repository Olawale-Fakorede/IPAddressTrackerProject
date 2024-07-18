
import React from 'react'
import { useState } from 'react'
import myImg from './images/icon-arrow.svg'

const Search = ({setIPAddress, fetchLocation}) => {

  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    // setInputValue(inputValue);
    setIPAddress(inputValue);
    fetchLocation(inputValue);
  }; 

  return (
    <div className='w-full h-10 relative top-7 pl-96  pt-2 flex'>

      <input
        type="text"
        placeholder="Enter the IP Address here.."
        className='rounded-l-lg w-80 h-8 outline-white py-2 pl-4 ml-28 text-xs font-san font-bold'
        onChange={(e) => setInputValue(e.target.value)}
      />

      <span className='w-8 h-8 bg-black rounded-r-lg'
      onClick={handleClick}>
        <img src={myImg} className='w-3 h-3 relative top-2 left-2' alt="arrow" />
      </span>
      <br />
      
    </div>
  )
}

export default Search