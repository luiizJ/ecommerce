/* eslint-disable @next/next/no-img-element */

import "../ExclusivoS/ExclusiveSection.css";

export const ExclusiveSection = () => {
  return (
    <div className="exclusiveSectionContainer">
      <div className="exclusiveSection">
        <div className="sectionContainer">
          <img
            src="/assets/images/exclusivo.png"
            alt="Exclusive Section"
            className="exclusive-section-image"
          />
        </div>
      </div>
    </div>
  );
};
