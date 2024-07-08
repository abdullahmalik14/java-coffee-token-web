import React from 'react'
import fb_icon from "../assets/fb.png"
import insta_icon from "../assets/insta.png"
import linkdin_icon from "../assets/linkdin.png"
import twitter_icon from "../assets/twitter.png"
import gmail_icon from "../assets/gmail.png"
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-main'>
            <div className='footer-sub-sec-1'>
                <img src={logo} alt="" />

                <ul className='menu-list'>
                    <li style={{color:"red"}}>Home</li>
                    <li>About</li>
                    <li> Tokenomics</li>
                    <li> Airdrop  </li>
                    <li> Roadmap </li>
                    <li>Team</li>
                    <li> Features </li>
                    <li>FAQs</li>
                    <li>Contact</li>
                </ul>
            </div>
            

            <hr className='foter-hr'/>
            

            <div className='footer-sub-sec-2'>
                <div className='social-icons-footer'>
                    <img src={fb_icon} alt="" />
                    <img src={insta_icon} alt="" />
                    <img src={linkdin_icon} alt="" />
                    <img src={twitter_icon} alt="" />
                    <img src={gmail_icon} alt="" />
                </div>

                <div className='copyright-footer'>
                    <p>© 2024 Copyright. </p>
                    <span> Java Coffee Token</span>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Footer
