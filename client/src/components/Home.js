import React from 'react'
import web from "../Images/a1.png";
const Home = () => {
  return (
    <div>
      <p>
      <span className="home">Home Page</span></p>
      <img src={web} alt="image" width="1000px" height="600px" className="img"/>
    </div>
  )
}

export default Home
