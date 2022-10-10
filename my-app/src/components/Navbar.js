import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './/Navbar.css'
const Navbar = () => {
  return (
    <div className="item">
    <ul className="nav">  
      <div className="logo"></div>
      <h1>EDUCATION</h1>
      <nav className="item"></nav>
          <ul className="ul">
            <li>
              <Link to='./components/Home' className='page-scroll'>
                Home
              </Link>
            </li>
            <li>
              <Link to='./components/About_Us' className='page-scroll'>
                About us
              </Link>
            </li>
            <li>
              <Link to='./components/Contact' className='page-scroll'>
                Contact us
              </Link>
            </li>
            <li>
              <Link to='./components/Academics' className='page-scroll'>
              academics
              </Link>
            </li>
            <li>
              <Link to='./components/User_manual' className='page-scroll'>
              User Manual
              </Link>
            </li>
          </ul>  
          </ul>
    </div>
  );
}

export default Navbar;

