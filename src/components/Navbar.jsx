import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="nav">
        <h1>React Router</h1>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
    </nav>
  )
}

export default Navbar