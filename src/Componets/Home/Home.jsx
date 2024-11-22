import React from 'react'
import my from "../../assets/my_pic.jpg"
import "./Home.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = () => {
  return (
    <>
      <div id="Home" className="hero">   
        <img src={my} alt="" />
        <h1><span>I am abhay,</span> frontEnd developer in Jabalpur.</h1>
        <p>I am  a new developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, dolorum.  </p>
        <div className="hero_rection">
        <div id="hero_contect">
      <AnchorLink className="Ancr_link" offset={50} href="#Contect">
        Connect with me
      </AnchorLink>
    </div>
            <div id="hero_resume">my resume</div>
        </div>
      </div>
    </>
  )
}

export default Home
