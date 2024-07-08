import React from 'react'
import beans from "../assets/main-section-beans.png"
import coins from "../assets/coins.png"
import coffecup from "../assets/CoffeeCup.png"
import smoke from "../assets/smoke.png"
import cup from "../assets/cup.png"
const Main_sub_section = () => {
  return (
    <div className='main-sub-section'>
      <div className='main-sub-section-left'>
        <h6>Join the Future of Online </h6>
        <span>JAVAting with <br /> Java Token</span>
        <p>Decentralized Casino and Sportsbook Platform <br /> Built on Blockchain  Technology</p>

        <button>
        Earn Free JAVA Tokens
        </button>
        <img src={beans} alt="" />
      </div>

      <div className='main-sub-section-right'> 
        <img className='coins-img' src={coins} alt="" />
        <img className='coffe-cup' src={coffecup} alt="" />
       <img className='smoke-img' src={smoke} alt="" />
       <img className='cup-img' src={cup} alt="" />
      </div>
      
    </div>
  )
}

export default Main_sub_section
