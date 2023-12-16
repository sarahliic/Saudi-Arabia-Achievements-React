import React from 'react'
import { useState } from 'react'
function Gender() {
    const [gender, setGender] = useState('');
    const [title, setTitle] = useState('');
  return (
      <>
       <div className="flex flex-col mb-4 md:flex-row md:gap-10">
  <span className="mb-2 md:mb-0 text-gray-500 block border border-grey-light p-3 rounded outline-gray-300">Gender:</span>
  <label className="flex items-center">
    <input
      type="radio"
      name="radio-5"
      value="male"
      className="radio radio-success w-4 h-4"
      checked={gender === 'male'}
      onChange={(e) => {
        setGender(e.target.value);
      }}
    />
    <span className="ml-2 ">Male</span>
  </label>
  <label className="flex items-center">
    <input
      type="radio"
      name="radio-5"
      value="female"
      className="radio radio-success w-4 h-4"
      checked={gender === 'female'}
      onChange={(e) => {
        setGender(e.target.value);
      }}
    />
    <span className="ml-2">Female</span>
  </label>
</div>
  
{gender && (
  <div className="flex flex-col mb-4 md:flex-row md:items-center">
    <span className="mb-2 md:mb-0">Title:</span>
    <select
      className="select select-bordered w-full md:w-auto max-w-xs md:ml-4 mb-4 md:mb-0"
      name="title"
      value={title}
      onChange={(e) => {
        setTitle(e.target.value);
      }}
    >
      <option>Select</option>
      {gender === 'male' && (
        <>
          <option>Mr.</option>
          <option>Dr.</option>
          <option>Prof.</option>
        </>
      )}
      {gender === 'female' && (
        <>
          <option>Ms.</option>
          <option>Mrs.</option>
          <option>Dr.</option>
          <option>Prof.</option>
        </>
      )}
    </select>
  </div>
)}
       
      </>
    );
}

export default Gender