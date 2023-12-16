import React from 'react'
import { useState } from 'react'

function Countries() {
    const countriesCities = [{
        name: "Japan", states:[
            {
                name: "Tokyo"
            },{
                name: "OsaKa"
            },
            {
                name:"Fukuoka"
            },
            {
                name:"Hiroshima"
            },{
                name:"Kobe "
            },
        ]},{
        name: "United States of America", states:[
            {
                name: "New York"
            },{
                name: "Los Angeles"
            },
            {
                name:"Chicago "
            },
            {
                name:" San Diego "
            },{
                name:"Philadelphia"
            },

    ]},{
        name: "United Kingdom", states:[
            {
                name: "London"
            },{
                name: "Manchester"
            },
            {
                name:"Birmingham"
            },
            {
                name:"Newcastle "
            },{
                name:"Sheffield "
            },

    ]},{
        name: "South Korea ", states:[
            {
                name: "Seoul"
            },{
                name: "Busan"
            },
            {
                name:"Daegu"
            },
            {
                name:"Incheon"
            },{
                name:"Daejeon"
            },

    ]},{
        name: "India", states:[
            {
                name: "Delhi"
            },{
                name: "Mumbai"
            },
            {
                name:"Bangalore"
            },
            {
                name:"Chennai"
            },{
                name:"Lucknow"
            },

    ]}
        ]

        const [country, setCountry] = useState();
        const [cities, setCities] = useState([]);
        const [city, setCity] = useState();
  return (
    <>
    {/* bg-slate-300 */}
    
   <div className='justify-center flex  '>
    <div className='w-72'>
        <h3 > </h3>
        {/* Coutnries */}
        <select className='select select-bordered w-full max-w-xs mb-4' onChange={(e)=>{
            setCountry(e.target.value)
            setCities(countriesCities.find(ctr => ctr.name === e.target.value).states)
        }} >
            <option className='text-gray-400'>Select your Country</option>
            {countriesCities.map(ctr =>(
                <option value={ctr.name}>{ctr.name}</option>
            ))}
        </select>
        <br />
        {/* Cities */}
        {/* <p className='text-gray-400'>Your City:</p> */}
        <select className='select select-bordered w-full max-w-xs mb-4' onChange={(e)=>{
            setCity(e.target.value)
        }}>
            <option className='text-gray-400'>Select your City</option>
            {cities.map(c =>(
                <option value={c.name}>{c.name}</option>
            ))}
        </select>
    </div>
   </div>

   
  </>
  )
}




export default Countries