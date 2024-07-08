import React from 'react'
import location from "../assets/Location.png"
import location_icon from "../assets/location icon.png"
import phone_icon from "../assets/Phone Icon.png"
import email_icon from "../assets/Email Icon.png"
import beans from "../assets/section-6-beans-img.png"
const Section_11 = () => {
  return (
    <>
    <div className='section-11'>
        <div className='section-11-left'>
            <h5>Contact us</h5>
         <div className='input-field'>
         <input type="text" placeholder='Name' /> 
         </div>

         <div className='input-field'>
         <input type="email" placeholder='Email' /> 
         </div>

         <div className='input-field-message'>
         <input type="text" placeholder='Message' /> 
         </div>

         <div className='checkbox'>
            <input type="checkbox" name="" id="" />
            <p>I would like to receive the newsletter.</p>

         </div>

         <button>Submit</button>
        </div>

        <div className='section-11-right'>
            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. <br />
             Nunc vulputate libero et velit interdum, ac aliquet odio <br />
              mattis.</p>

            <img className='section-11-loc-img' src={location} alt="" />
                <div className='section-11-icon'>
                    <img src={location_icon} alt="" />
                    <p>NYC, United States</p>
                </div>

                <div className='section-11-icon'>
                    <img src={phone_icon} alt="" />
                    <p>000111222333</p>
                </div>

                <div className='section-11-icon'>
                    <img src={email_icon} alt="" />
                    <p>somebody@gmail.com</p>
                </div>
        </div>
    </div>

    <img className='sec-11-beans-img' src={beans} alt="" />

    <div className='stay-update-sec'>
        <div className='stay-update-sec-left'>
            <h5>Stay update with us</h5>
        </div>

        <div className='stay-update-sec-right'>
            <div className='email-input-field'>
                <input type="email" placeholder='Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Section_11
