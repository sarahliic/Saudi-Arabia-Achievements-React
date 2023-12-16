import React from 'react'
import "../css/Home.css"
import Header from '../component/Header'
import CountUp from 'react-countup';
import Projects from '../component/Projects';
function Home() {
  return (
    <>
    
    
     <div>
        <Header/>
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
                  Launching e-tourism
                  </span>
                </div>
            </div>


            <div className='flexCenter stats'>
                <div className='flexColCenter state'>
                  <span>
                    <CountUp start={1950} end={2000} duration={4}/>
                    <span>+</span>
                    </span> <span className='secondryText ml-3'>
                    Job opportunities
                  </span>
                </div>
            </div>


            <div className='flexCenter stats'>
                <div className='flexColCenter state'>
                  <span>
                    <CountUp  end={28} />
                    <span>+</span>
                    </span> 
                    <span className='secondryText ml-3'>
                    Launching the Green Saudi Initiative,
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
    <div>
      {/* <Projects/> */}
    </div>
     {/* <div className='content-box'>
          <div className='explore-content'>
            <p>Explore</p>
          </div>
          <div className='title-content'>
            <p>SAUDI ARABIA</p>
          </div>
          <div className='parg-conten'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusantium nam tenetur, eveniet voluptates sint possimus!</p>
          </div>
          <div className='btn-content'>
            <button className='btn-explore'>Eplore More</button>
          </div>
        </div>
        <div className='images-box'>
          <img src="" alt="" />
        </div> */}
    </>
  )
}

export default Home