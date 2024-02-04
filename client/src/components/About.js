import React from 'react';
import about from "../Images/a.jpg";

const About = () => {
  return (
    <>
      <p><span className="about">About us Page</span></p>
      {/* <span className="About">Aboutus Page</span> */}
      <img src={about} alt="image" width="1000px" height="600px" className="img"/>
      </>
  )
}

export default About
