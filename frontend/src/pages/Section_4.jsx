import React from 'react'
import umbrella from "../assets/umbrella.png"
const Section_4 = () => {
  return (
    <div className='section-4'>
      <div className='section-4-left'>
        <h6>Airdrop Campaign</h6>
        <div className='section-4-sale-section'>
            <h6>Token Sale Restrictions</h6>
            <p>Airdrop tokens can only be sold after the initial
                  distribution phases (Seed Sale and Public Sale).</p>
        </div>

        <div  className='section-4-detail-section'>
          
            <h6>Airdrop Details</h6>

            <span>Initial Registration: </span>
            <p>Receive 500 JAVA tokens upon registration.</p>

            <span>Referral Bonus:  </span>
            <p>Earn 100 JAVA tokens for every referred friend who  registers.</p>

            <span>Engagement Bonus:  </span>
            <p>Participate in platform activities to earn additional  tokens.</p>
        </div>

        <button>
        Join Airdrop Campaign
        </button>
 
      </div>

      <div className='section-4-right'>
          <img src={umbrella} alt="" />
      </div>
    </div>
  )
}

export default Section_4
