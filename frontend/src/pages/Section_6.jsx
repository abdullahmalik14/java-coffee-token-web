import React from 'react'
import beans from "../assets/section-6-beans-img.png"
const Section_6 = () => {
  return (
    <div className='section-6'>
      <h6 className='sec-6-main-head'>Staking and Rewards</h6>

      <div className='sec-6-sub-sec-1'>
         <h6>Staking Program Details</h6>
         <ul>
            <li>Stake your JAVA tokens to become a <br /> partner of Java Token</li>
            <li> Earn a share of the Gross Gaming Revenue <br /> (GGR) as long as your tokens are staked</li>
         </ul>
      </div>

    
      <div className='sec-6-sub-sec-1 sec-6-sub-sec-2'>
         <h6>Benefits of Staking</h6>
         <ul>
            <li>Passive Income</li>
            <li>Enhanced Voting Power in Platform Decisions</li>
            <li>Exclusive Access to Special Events and <br /> Promotions</li>
         </ul>
      </div>
      <button>
         Stake Your JAVA Tokens
         </button><br />
      <img src={beans} alt="" />

    </div>
  )
}

export default Section_6
