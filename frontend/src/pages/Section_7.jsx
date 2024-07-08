import React from 'react'
import img1 from "../assets/section-7-img-1.png"
import img2 from "../assets/section-7-img-2.png"
import img3 from "../assets/section-7-img-3.png"
const Section_7 = () => {
  return (
    <div className='section-7'>
        <h5>Our Team Member is ready to <br />
        help our Clients!</h5>

        <div className='section-7-carts'>
  
            <div className='sec-7-cart'>
                <img src={img1} alt="" />
                <div className='sec-7-cart-details'>
                    <h6>Gabriel Moulinou</h6>
                    <span>Founder</span>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                </div>
            </div>



            <div className='sec-7-cart'>
                <img src={img2} alt="" />
                <div className='sec-7-cart-details'>
                    <h6>Gabriel Moulinou</h6>
                    <span>Founder</span>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                </div>
            </div>



            <div className='sec-7-cart'>
                <img src={img3} alt="" />
                <div className='sec-7-cart-details'>
                    <h6>Gabriel Moulinou</h6>
                    <span>Founder</span>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section_7
