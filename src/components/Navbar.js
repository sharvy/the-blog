import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-800 text-white flex items-center justify-between h-16 px-20">
      <h1>The Blog</h1>
      <div className="links flex items-baseline space-x-4">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  )
}

export default Navbar
