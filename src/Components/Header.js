import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
              <Link className="nav-link " to="/">
                Logout{" "}
              </Link>
            </li>
      </ul>
      <h1>Todo-List</h1>
    </div>
  )
}

export default Header
