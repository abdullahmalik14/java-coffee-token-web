import React from 'react'
import coins from "../assets/coins.png"
import coffecup from "../assets/CoffeeCup.png"
import beans from "../assets/section-5-beans.png"
const Section_5 = () => {
  return (
    <div className='section-5'>
          <div className='section-5-main'>
          <h6> Roadmap</h6>
          
          <div className='project-milestone'>
          <div className='dot'></div>
          <div className='dashed'></div>
          <button className='milestone-btn'>
          Project Milestones
          </button>
          </div>

         
          </div>

          <div className='d-flex'>
          <div className='section-5-left'>
                <img className='section-5-coins-img' src={coins} alt="" />
                <img className='section-5-cup-img' src={coffecup} alt="" />
             </div>

             <div className='section-5-right'>
             <div className="timeline">
<div className="timeline-event-1">
  <div className="timeline-dot"></div>
  <div className="timeline-content-1">
    <h3>September 2024:</h3><br />
    <p>Full Launch and<br/>Marketing Campaign</p>
  </div>
</div>
<div className="timeline-event-2">
  <div className="timeline-dot"></div>
  <div className="timeline-content-2">
    <h3>August 2024: </h3> <br />
    <p>JAVAa Testing and <br /> Security Audits</p>
  </div>
</div>
<div className="timeline-event-3">
  <div className="timeline-dot"></div>
  <div className="timeline-content-3">
    <h3>July 2024:</h3> <br />
    <p>Platform Design and Smart <br /> Contract Development</p>
  </div>
</div>
<div className="timeline-event-4">
  <div className="timeline-dot"></div>
  <div className="timeline-content-4">
    <h3>June 2024:</h3> <br />
    <p>Project Planning and <br /> Team Assembly</p>
  </div>
</div>
</div> 
             </div>
          </div>
         <div className='section-5beans-img'>
         <img src={beans} alt="" />
         </div>
    </div>
  )
}

export default Section_5


