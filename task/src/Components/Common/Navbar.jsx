import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div
      className='d-flex justify-content-between align-items-center px-5 py-4 bg-transparent text-white'
      style={{
        position: 'absolute', 
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10,
      }}
    >
      <h2>50.on</h2>
      <button className='btn btn-white'><Link className="decoration-none" to="/getintouch">Get In Touch</Link></button>
    </div>
  )
}

export default Navbar
