import React from 'react'
import image from "../Images/s.png";
const success = () => {
  return (
    <div>
      <h2>Welcome Login <span className="demo">Successfully</span></h2>
      <img src={image} alt="image" width="40%" height="60%"/>
    </div>
  )
}

export default success
