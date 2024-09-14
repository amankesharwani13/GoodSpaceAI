import React from 'react';
import FeaturesSection from './FeaturesSection';
import "./styles/Feature.scss";

const featuresData = [
  [
    { imageSrc: "/images/Frame484578.png", description: "Use any parameter to setup distinct employee groups to implement policies" },
    { imageSrc: "/images/Frame484578_.png", description: "Configure ANY policy - and if you can't configure it, we promise to work on it for free" },
    { imageSrc: "/images/Frame484578__.png", description: "Setup the reports that you want using our seamless reporting engine." }
  ],
  [
    { imageSrc: "/images/Frame_.png", description: "Manage all expenses and travel requests easily. Empower your employees with personalized reports." },
    { imageSrc: "/images/Frame1.png", description: "Integrate with your upstream, HRMS or your downstream finance system to seamlessly deliver value through our Open APIs." },
    { imageSrc: "/images/Frame2.png", description: "Configure approvals or rejections. Escalations and reports. At will. Setup new groups." }
  ],
  [
    { imageSrc: "/images/Frame3.png", description: "The world’s best OCR system backs up this product. All data goes in. 99% success." },
    { imageSrc: "/images/Frame4.png", description: "Ask the concierge to change things during your travel - and it will trigger relevant actions 24x7." },
    { imageSrc: "/images/Frame5.png", description: "Just tell us what you want to do in normal language and we will try and put together the best itinerary for you." }
  ]
];

const Feature = () => {
  return (
    <div>
      <FeaturesSection features={featuresData} />
    </div>
  );
};

export default Feature;

