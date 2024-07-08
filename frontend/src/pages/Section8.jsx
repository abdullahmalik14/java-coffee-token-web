import React from 'react'
import img from "../assets/sec-8-img.png"
const Section8 = () => {
  return (
    <div className='section-8'>
      <div className='section-8-left'>
            <h5>Platform Features</h5>

            <div className='sec-8-left-sub-sec'>
                <h6>Casino Games</h6>
                <p>A wide range of casino games including slots, <br />
                 poker, blackjack, roulette, and more, all provably <br />
                  fair using blockchain technology</p>
            </div>

            <div className='sec-8-left-sub-sec'>
                <h6>Sportsbook</h6>
                <p>Comprehensive sportsbook offering JAVAting <br />
                 options on a wide range of sports and events, <br />
                  with real-time odds and live JAVAting features</p>
            </div>
      </div>

      <div className='sec-8-img'>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Section8
