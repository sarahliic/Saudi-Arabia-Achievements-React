import React from 'react'
import BgImage from "../src/images/bgSignup.jpg"
import Countries from './Countries'
import Gender from './Gender'
import Agecatagories from './Agecatagories'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

// import Countries from './Countries'
function SignUp() {
    const navigation = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Perform form validation
        if (formData.username.length < 4) {
          alert('Username should be at least 4 characters long.');
          return;
        }
    
        if (!validateEmail(formData.email)) {
          alert('Invalid email address.');
          return;
        }
    
        if (formData.password.length < 6 || !validatePassword(formData.password)) {
          alert('Password should be at least 6 characters long and contain one capital letter and one number.');
          return;
        }
    
        if (formData.password !== formData.confirmPassword) {
          alert('Password and confirm password do not match.');
          return;
        }
    
        // Form is valid, proceed with submission
        // ...
        localStorage.setItem(formData.username, JSON.stringify(formData));

        navigation("/SignIn", {state: {formData:formData}})
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // validate email format
      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      // validate password format
      const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        return passwordRegex.test(password);
      };
  return (
   <>
   <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src="https://i.pinimg.com/564x/4e/fc/a9/4efca90d6d03cbac88284bfbb6dedede.jpg" alt="Album" className='object-cover h-full w-full'/></figure>
    <div className="card-body">
        <h2 className="card-title"></h2>
        {/* <p>Click the button to listen on Spotiwhy app.</p> */}
        {/* <p>User Name</p> */}
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black min-w-[650px] max-sm:w-full">
                    <h1 className="mb-8 text-3xl text-left"> <span className='text-lime-950 text-xl font-bold'>Welcome to Explore Saudi Arabia</span> <br /><span className='text-lg text-gray-600'> Sign Up your account</span></h1>
                    <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4 outline-gray-300"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4 outline-gray-300"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4 outline-gray-300"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                 <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4 outline-gray-300"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

                        {/* Countries */}
                         <div className='flex w-72 flex-col gap-6'>
                                <Countries/>
                         </div>
                        

                        {/* Gender */}
                        
                        <Gender/>

                        {/* Age Catagories */}
                       <div>
                        <Agecatagories/>
                        </div>
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 bg-lime-950"
                    >Create Account</button>
                    </form>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
        {/* <div className="card-actions justify-end">
         <button className="btn btn-primary">Listen</button>
        </div> */}
     </div>
    </div>
        
    
   
   </>
  )
}

export default SignUp