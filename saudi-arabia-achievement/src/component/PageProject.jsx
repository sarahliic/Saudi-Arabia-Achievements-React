import React from 'react'
import Home from '../pages/Home'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png';
import "../css/Home.css"
import Header from '../component/Header'
import CountUp from 'react-countup';
import Projects from '../component/Projects';
function PageProject() {
  return (
    <div>

        <div>
        <section className="h-wrapper">
        <div className="flexCenter innerWidth h-container">
          {/* Logo and explore link */}
          <div className="flexCenter">
            <img src={Logo} alt="logo" width={20} />
            <div className="h-menue">
              <a href="/PageProject" className="link-color">
                Explore Saudi Arabia
              </a>
             <Link to="/Projects"> <a className="link-color ml-4 font-bold">
                Our Acheivement
              </a></Link>
            </div>
          </div>
          {/* Header Menu Start */}
          <div className="flexCenter h-menue">
              <button className="button">
                Sign Out
              </button>
          
          </div>
        </div>
      </section>
        </div>
       <section className='hero-wrapper'>
      <div className='paddings innerWidth  flexCenter hero-container'>


        {/* hero left */}
        <div className="hero-left">
            <div className="flexColStart hero-title">
              <div className="orange-circle"></div>
              <h1>
              Explore <br /> Saudi Arabia
              </h1>
            </div>
            <div className="flexColStart hero-des">
              <span className='secondryText'>Welcome to Explore Saudi Arabia! Immerse yourself <br />in the rich cultural heritage, breathtaking landscapes, and modern wonders of this captivating kingdom.</span>
            </div>

            {/* Stats start */}
            <div className='flexCenter stats'>
                <div className='flexColCenter state'>
                  <span>
                    <CountUp start={8800} end={9000} duration={4}/>
                    <span>+</span>
                    </span> 
                  <span className='secondryText'>
                      preimeum products
                  </span>
                </div>
            </div>


            <div className='flexCenter stats'>
                <div className='flexColCenter state'>
                  <span>
                    <CountUp start={1950} end={2000} duration={4}/>
                    <span>+</span>
                    </span> 
                    <span className='secondryText'>
                      Hapkjdflasald
                  </span>
                </div>
            </div>


            <div className='flexCenter stats'>
                <div className='flexColCenter state'>
                  <span>
                    <CountUp  end={28} />
                    <span>+</span>
                    </span> 
                    <span className='secondryText'>
                      kjhgfdgh
                  </span>
                </div>
            </div>
        </div>

        {/* Hero right */}
        <div className=" flexCenter  hero-right">
            <div className='image-container'>
              <img src="https://i.pinimg.com/564x/04/75/25/0475252549179dd43f8dfa2499c4f7ef.jpg" alt="hero-img" />
            </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default PageProject