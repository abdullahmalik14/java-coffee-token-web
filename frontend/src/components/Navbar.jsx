import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <div className='navbar'>
      <img className='navbar-logo' src={logo} alt="" />
        <div className={toggle?"nav-list-mobile" :"nav-list"}>
            <ul>
                <li style={{color:"#FF0000"}}>Home</li>
                <li>About</li>
                <li>Tokenomics</li>
                <li>Airdrop</li>
                <li>Roadmap</li>
                <li>Team</li>
                <li>Features</li>
                <li>FAQs</li>
                <li>Contact</li>
              
                <button className='register-button'>
            Register Now
        </button>
               
            </ul>
        </div>
        <div onClick={()=>setToggle(!toggle)} className='hamburger-menu'>
        <GiHamburgerMenu />
        </div>
       

        
    </div>
  )
}

export default Navbar
