import React from 'react'
import bean_1 from "../assets/bean-1.png"
import bean_2 from  "../assets/bean-2.png"
import bean_3 from  "../assets/bean-3.png"
import smoke from "../assets/sec-2-smoke-img.png"
const Section_2 = () => {
  return (
    <div className='section-2'>
      <img className='bean-1' src={bean_1} alt="" />
      <div className='section-2-left'>
            <div className='d-flex'>
            <div>
            <h5>About Java Token</h5>
            <p>Welcome to Java Token, the next-generation <br />
                 decentralized online  casino and sportsbook <br />
                  platform. Our mission is to revolutionize the online <br />
                 gambling  industry by leveraging the transparency, <br />
                  security, and fairness of blockchain  technology.</p>
                
            </div>
            <div className='bean-2-img'>
                <img style={{marginLeft:"100px"}} src={bean_2} alt="" />
            </div>
            </div>
            
            <div className='d-flex'>
                <div>
                <h6>Key Benefits</h6>
            <ul>
                <li>Secure and Transparent Transactions  </li>
                <li>Low Fees and Fast Processing  </li>
                <li>Generous Rewards and Staking Opportunities</li>
            </ul>
                </div>
                <div className='bean-3-img'>
                <img src={bean_3} alt="" />
                </div>
            </div>
      </div>

      <div className='section-2-right'>
            <img src={smoke} alt="" />
      </div>
    </div>
  )
}

export default Section_2
