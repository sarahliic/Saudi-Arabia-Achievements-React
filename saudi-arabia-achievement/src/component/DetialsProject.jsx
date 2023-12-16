import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Achievements from "../component/Acheivement.js"
import Logo from "../images/logo.png"

function DetialsProject() {
    const {id} = useParams()

    const project = Achievements.find((item)=> item.id == id)
  return (
    <div>
      {/* <div className="card card-side bg-base-100 shadow-xl">
    <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
    <div className="card-body">
      <h2 className="card-title">Achieved significant milestones</h2>
      <p> in various fields, demonstrating  to progress and developmen</p>
      <div className="card-actions justify-end">
      <Link to="/"><button className="btn btn-primary m-3">Home</button></Link>      </div>
    </div>
  </div> */}
    
      {/* ---- */}
    {/* //   <div className="card lg:card-side bg-base-100 shadow-xl" style={{ backgroundImage: "url('https://i.pinimg.com/564x/54/ca/0d/54ca0d3bd10058521c6f24f4c0521c09.jpg')" }}>
    //   <figure><img src="https://i.pinimg.com/564x/9d/3c/a8/9d3ca84eba4b9e6175282422513a77e7.jpg" alt="Album"/></figure>
    //   <div className="card-body">
    //     <h2 className="card-title">Achieved significant milestones</h2>
    //     <p></p>
    //     <div className="card-actions justify-end">
    //     <Link to="/"><button className="btn btn-primary m-3">Home</button></Link>    </div>
    //   </div>
    // </div> */}
      {/* ---- */}
     {/* <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: "url('https://i.pinimg.com/564x/54/ca/0d/54ca0d3bd10058521c6f24f4c0521c09.jpg')" }}>
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://i.pinimg.com/736x/3b/dc/46/3bdc465e9478c0ac1d3a533c78fb18c4.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-normal italic ml-3 loading-4">Achieved significant milestones <br /> in various fields, demonstrating  to progress and development</h1>
      {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      {/* <Link to="/"><button className="btn btn-primary m-3">Home</button></Link>
    </div>
  </div>
  </div> */} 
    <div>
        <section className="h-wrapper">
        <div className="flexCenter innerWidth h-container">
          {/* Logo and explore link */}
          <div className="flexCenter">
            <img src={Logo} alt="logo" width={20} />
            <div className="h-menue">
              <a href="/" className="link-color">
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
      {/* Content project */}
      <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img src={project.img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl font-normal italic ml-3 loading-4">{project.title}</h1>
      <p className="py-6">{project.description}</p>
      <Link to="/"><button className="btn bg-lime-950 m-3 text-white">Home</button></Link>
    </div>
  </div>
</div>
     
    </div>
  )
}

export default DetialsProject