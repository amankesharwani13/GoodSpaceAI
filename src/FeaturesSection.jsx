import React from 'react';

const FeaturesSection = ({ features }) => {
  return (
    <div className="wrapper">
      <h2 className="heading">Features that suit your needs</h2>
      {features.map((featureGroup, index) => (
        <div className="box" key={index}>
          {featureGroup.map((feature, idx) => (
            <div className={`box${idx + 1}`} key={idx}>
              <img src={feature.imageSrc} alt={`Feature ${idx + 1}`} />
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
