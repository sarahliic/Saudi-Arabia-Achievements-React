import React from 'react'
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Countries from '../Countries';
function UserInfo() {
    const location = useLocation();
  const formData = location.state?.formData || {};
  return (

    <div>
        <div>
            <Header/>
        </div>
        <div>
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div className="card-body">
  {/* p>{formData.}</p>  <h2 className="card-title"></h2> */}
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    </div>
  )
}

export default UserInfo