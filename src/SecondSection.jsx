import React from "react";
import { Button } from "./styles/Button";
import "./styles/SecondSection.scss";


const SecondSection = () => {
  return (
    <div className="wrapper">
      <hr color="gray"></hr>
        <div>
          <div className="section-second-data">
            <p className="second-top-data">The World's Most Configurable</p>
            <h1 className="second-top-data1">
              Travel & Expense Management Software
            </h1>
            <p className="second-para">
              Configure <u className="underline">any</u> rule. Enable a world class mobile experience for
              your users.Get seamless reporting & integrations. Inbuild OCR
              expense scanning. Manage travel & non-travel expenses. Open APIs
              to connect with external systems
            </p>
            <div className="btnname">
              <input type="text" id="name" name="name" placeholder="Name" />
              <input type="email" id="email" name="email" placeholder="Official email ID" />
              <Button className="btn hireme-btn">Start trial</Button>
            </div>
            <div className="below">
              <p>30 Days free trial</p>
              <img src="/images/Ellipse5.png"></img>
              <p>Upto 10 users</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SecondSection;
