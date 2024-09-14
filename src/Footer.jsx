import React from "react";
import "./styles/Footer.scss";

const Footer = () => {
  return (
    <div className="wrapper">
        <div className="b1">
        <img src="./images/Frame484821.png" alt="logo" className="logo" />
        <a href="https://www.example.com">
           <img src="./images/Frame17.png" alt="Your Image" />
        </a>
        </div>
        <div className="b2">
        <a href="https://www.example.com">
           <img src="./images/Frame18.png" alt="Your Image" />
        </a>
        </div>
        <div className="b3">
        <img src="./images/SocialMedia.png"></img>
        <a href="https://www.example.com">
           <img src="./images/linkedinblack.png" alt="Your Image" />
        </a>
        <a href="https://www.example.com">
           <img src="./images/youtubecolor.png" alt="Your Image" />
        </a>
        <a href="https://www.example.com">
           <img src="./images/instagramblack.png" alt="Your Image" />
        </a>
        </div>
      <hr></hr>
      <div className="last">
      <div>
      <a href="https://www.example.com">Blogs</a>
      <a href="https://www.example.com">Features</a>
      <a href="https://www.example.com">Pricing</a>
      <a href="https://www.example.com">Integrations</a>
      <span className="copy">Copyright &copy; 2024 <img src="/images/Ellipse5.png"></img> ExpenseBook</span>
      </div>
      </div>
    </div>
  );
};

export default Footer;
