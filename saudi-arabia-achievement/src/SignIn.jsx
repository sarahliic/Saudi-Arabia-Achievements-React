import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigation = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Perform form validation
        if (formData.username.length < 4) {
          alert('Username should be at least 4 characters long.');
          return;
        }
    
        if (formData.password.length < 6 || !validatePassword(formData.password)) {
          alert('Password should be at least 6 characters long and contain one capital letter and one number.');
          return;
        }
    
    
        // Form is valid, proceed with submission
        // ...
        let userInfo = localStorage.getItem(formData.username);
        if(userInfo  === null ){
            alert("You don't have an account. Please sign up.")
           
        }else{
            navigation("/PageProject")
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
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
                    <h1 className="mb-8 text-3xl text-left"> <span className='text-lime-950 text-xl font-bold'>Welcome to Explore Saudi Arabia</span> <br /><span className='text-lg text-gray-600'> Log In to your account</span></h1>
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
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4 outline-gray-300"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 bg-lime-950"
                    >Log In</button>
                    </form>
                </div>

                <div className="text-grey-dark mt-6">
                    Don't have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Sign Up
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

export default SignIn