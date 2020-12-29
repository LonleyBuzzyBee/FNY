import React from 'react';
import FNYLOGO from '../assets/imgs/logoNoC.png';

const TopSection = () => {
  return (
    <section className="itemListTopSection">
      <div className="animateImg1 animateImg">
      </div>
      <div className="logoOutsideContainer">
        <div className="logoInsideContainer">
            <img className="logoList" src={FNYLOGO} alt="fny logo"></img>
            <h2>35% OFF SALE</h2>
            <h5>USE COUPON CODE: </h5>
            <h5>F-N-Y</h5>
        </div>
      </div>
      <div className="animateImg2 animateImg">  
      </div>
    </section>
  )
}

export default TopSection
