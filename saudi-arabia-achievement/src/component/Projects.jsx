import React from "react";
import Achievements from "./Acheivement";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
// import SearchBar from '../component/SearchBar.jsx';
import Search from "./Search";
import "../css/Header.css";

function Projects() {
  return (
    <>
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
                <Link to="/Projects">
                  {" "}
                  <a className="link-color ml-4 font-bold">Our Acheivement</a>
                </Link>
              </div>
            </div>
            {/* Header Menu Start */}
            <div className="flexCenter h-menue">
              <button className="button">Sign Out</button>
            </div>
          </div>
        </section>

        <section className="hero-wrapper">
          <div className="paddings innerWidth  flexCenter hero-container">
            {/* hero left */}
            <div className="hero-left">
              <div className="flexColStart hero-title">
                <div className="orange-circle"></div>
                <h1>
                  Discover <br /> Our Acheivement
                </h1>
              </div>
              <div className="flexColStart hero-des">
                <span className="secondryText">
                  Achieved significant milestone <br />
                  in the rich cultural heritage, breathtaking landscapes, and
                  modern wonders of this captivating kingdom.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ------------ */}

        <br />
        <br />
        <br />
        <br />

        {/* <div className='flex justify-center items-center border border-b-neutral-600'>
      <Search/>
     </div> */}
        <br />
        <div className="flex justify-center items-center flex-wrap gap-10">
          {Achievements.map((achive) => (
            <div
              className="card w-96 bg-base-100 shadow-xl image-full"
              key={achive.id}
            >
              <figure>
                <img src={achive.img} alt="img-project" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{achive.title}</h2>
                <p>{achive.track}</p>
                <div className="card-actions justify-end">
                  <Link to={`/DetialsProject/${achive.id}`}>
                    <button className="btn  bg-lime-950 text-white">
                      Explore More
                    </button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
