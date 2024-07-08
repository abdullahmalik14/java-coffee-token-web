import React from 'react'
import coins from "../assets/coins.png"
import coffe_beans from "../assets/real-coffee-beans.png"
const Section_3 = () => {
  return (
    <div className='section-3'>
        <div className='section-3-left'>
            <img className='coffe-beans' src={coffe_beans} alt="" />
            <img className='section-3-coins' src={coins} alt="" />
        </div>

        <div className='section-3-right'>
           <h6>Tokenomics</h6>
           <span>Total Supply: 1,000,000,000 JAVA tokens</span>
           <div className='p-texts'>
           <p>Seed Sale Allocation: 20%</p>
           <p>Seed Sale Price: $0.01 per JAVA token</p>
           <p>Fundraising Target: $2,000,000</p>
           </div>
           <button>
           Participate in Seed Sale
           </button>
        </div>
    </div>
  )
}

export default Section_3
