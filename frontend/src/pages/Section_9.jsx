import React from "react";
import img from "../assets/section-9-img.png";
import locationimg from "../assets/location icon.png"
import rupee_img from "../assets/mdi_rupee.png"
import beans from "../assets/section-5-beans.png"
const Section_9 = () => {
  return (
    <div className="section-9">
      <h6>Upcoming Events</h6>

      <div className="section-9-carts">
        <div className="section-9-cart-1">
          <img src={img} alt="" />
          <div className="text-content">
            <h5>Karthik Live</h5>
          </div>
        </div>

        <div className="section-9-cart-1">
          <img src={img} alt="" />
          <div className="text-content-2">
            <h5>Kisiko batana Mat</h5>
            <p>Shilpakala Vedika, HITECH city</p>
            <p><img  src={locationimg} alt="" />Location</p>
            <p><img  src={rupee_img} alt="" />799 onwards</p>
          </div>
        </div>

        <div className="section-9-cart-1">
          <img src={img} alt="" />
          <div className="text-content">
            <h5>“Heeriya” India Tour</h5>
          </div>
        </div>

        <div className="section-9-cart-1">
          <img src={img} alt="" />
          <div className="text-content">
            <h5>Comedy Jam</h5>
          </div>
        </div>
      </div>

      <img className="section-9-beans" src={beans} alt="" />
    </div>
  );
};

export default Section_9;
