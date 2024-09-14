import React from "react";
import { Button } from "./styles/Button";
import "./styles/Customer.scss";

const Customer = () => {
  return (
    <div className="wrapper">
      <h2>Our Customer love us</h2>
      <div className="line0">
      <img className="line1" src="/images/Frame12.png"></img>
      <img className="line2" src="/images/Frame13.png"></img>
      <img className="line3" src="/images/Frame14.png"></img>
      </div>
      <div className="travel">
        <h2>Manage your travel and expenses the smart way!</h2>
        <div className="btnname">
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="email" id="email" name="email" placeholder="Official email ID" />
          <Button className="btn hireme-btn">Start trial
          </Button>
        </div>
        <div className="below">
          <p>30 Days free trial</p><img src="/images/Ellipse5.png"></img>
          <p>Upto 10 users</p>
          </div>
      </div>
    </div>
  );
};

export default Customer;
