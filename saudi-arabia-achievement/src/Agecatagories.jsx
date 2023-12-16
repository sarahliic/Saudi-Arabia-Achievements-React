import React from 'react'
import { useState } from 'react';
function Agecatagories() {
    const [ageCategory, setAgeCategory] = useState('');
  
  return (
    <>
    <div className="flex flex-col gap-y-5 ">
        <span className='mb-2 md:mb-0 text-gray-500 block border border-grey-light p-3 rounded outline-gray-300'>What is your Age?</span>
  <label className="flex items-center mb-2 md:mb-0 md:ml-4 ">
    <input
      type="radio"
      name="radio-5"
      value="under17"
      className='radio radio-success w-4 h-4'
      checked={ageCategory === 'under17'}
      onChange={(e) => {
        setAgeCategory(e.target.value);
      }}
    />
    <span className="ml-2">Under 17 years old</span>
  </label>
  <label className="flex items-center mb-2 md:mb-0 md:ml-4">
    <input
      type="radio"
      name="radio"
      value="18to35"
      className='radio radio-success w-4 h-4'
      checked={ageCategory === '18to35'}
      onChange={(e) => {
        setAgeCategory(e.target.value);
      }}
    />
    <span className="ml-2">18-35 years old</span>
  </label>
  <label className="flex items-center mb-2 md:mb-0 md:ml-4">
    <input
      type="radio"
      name="radio"
      value="36older"
      className='radio radio-success w-4 h-4'
      checked={ageCategory === '36older'}
      onChange={(e) => {
        setAgeCategory(e.target.value);
      }}
    />
    <span className="ml-2">36 years or older</span>
  </label>
</div>
</>
  )
}

export default Agecatagories