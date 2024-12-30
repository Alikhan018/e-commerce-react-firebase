import React from "react";
import Image from "../../assets/images/home/carousal-image.png";
export default function HomeCarousal() {
  return (
    <section>
      <div className="carousal-image">
        <div>
          <div className="inner-container">
            <div>
              <h2>Explore E-Comm. Shop your favourite products</h2>
              <p>Explore your favourite categories. We've got you covered.</p>
              <button type="button" id="button-banner">
                Explore now!
              </button>
            </div>
          </div>
          <img src={Image} alt="" />
        </div>
      </div>
    </section>
  );
}
