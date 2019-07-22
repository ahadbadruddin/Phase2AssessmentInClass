import React from 'react';
import {Link} from 'react-router-dom'

export default function Navbar(props) {

    return (
        <nav className="Navbar">
          <Link to="/">Home</Link>
          <Link to="/sum">Sum</Link>
        </nav>
  
    )
  }