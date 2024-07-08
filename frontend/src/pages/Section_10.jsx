import React from 'react'
import minusImg from "../assets/minus-img.png"
import plusImg from "../assets/plus-img.png"

const Section_10 = () => {
  return (
    <div className='section-10'>
        <h2>FAQs</h2>

        <div className='faq-ques'>
            <div className='question'>
                <h5>01. Can I find the right information faster?</h5>
            <div className='d-flex answer'>
            <p> pNulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien.
                 Donec ornare odio justo, ac <br />
                efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.</p>

                <img src={minusImg} alt="" />
            </div>
                <hr className='hr'/>
            </div>

            <div className='ques'>
                
                <h5>02. How to share feature demos and ideas?</h5>
                <img src={plusImg} alt="" />
                
            </div>
                <hr className='hr'/>

            <div className='ques ques-3-img'>
                <h5>03. How to get insights from users? </h5>
                <img src={plusImg} alt="" />
            </div>
                <hr className='hr'/>

            <div className='ques'>
                <h5>04. Can I develop my website without code?</h5>
                <img src={plusImg} alt="" />
            </div>
                <hr className='hr'/>

        </div>
    </div>
  )
}

export default Section_10
