
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
    <div className=' h-2/5 w-full md:w-full lg:w-full search-bar-container bg-cover flex flex-row gap-5 justify-center items-center relative top-3'>

      <input
        type="text"
        placeholder="Enter the IP Address here.."
        className='rounded-l-lg w-64 h-8 outline-white ml-5 pl-4 text-xs font-san font-bold'
        onChange={(e) => setInputValue(e.target.value)}
      />

      <span className='w-8 h-8 bg-black rounded-r-lg relative right-5'
      onClick={handleClick}>
        <img src={myImg} className='w-3 h-3 relative top-2 left-2' alt="arrow" />
      </span>
      <br />
      
    </div>
  )
}

export default Search