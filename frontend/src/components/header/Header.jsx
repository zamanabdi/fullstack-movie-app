import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import "./header.css";
import axios from 'axios';

const Header = () => {
const [displayNav,setDisplayNav] = useState(false);


  return (
    <div className='header-wrapper'>
      {/* Logo */}
      <div className='logo-wrapper'>MovieBuzz <span><img src={Logo}/></span></div>

      {/* nav menu */}
      <ul className='menu'>
       <li><Link to={'/movies'}>Movies</Link></li>
       <li><Link to={'/series'}>Tv Series</Link></li>
       <li><Link to={'/login'}>Login</Link></li>
      </ul>

      {/* mobile view */}
      <div className='ham-icon' >
      {
        displayNav === true? <ImCross color='#fff' size={"20px"} onClick={() => setDisplayNav(!displayNav)}/> : <GiHamburgerMenu color='#fff' size={"25px"} onClick={() => setDisplayNav(!displayNav)}/>
      }
      
      </div>

      <ul className={displayNav === true? "nav-wrapper" : "nav-wrapper-hidden"}>
      <li onClick={() => setDisplayNav(!displayNav)}><Link to={'/movies'}>Movies</Link></li>
      <li onClick={() => setDisplayNav(!displayNav)}><Link to={'/series'}>Tv Series</Link></li>
      <li onClick={() => setDisplayNav(!displayNav)}><Link to={'/login'}>Login</Link></li>
      </ul>


    </div>
  )
}

export default Header
