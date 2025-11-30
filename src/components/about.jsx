import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Why auraPic?</h2>
              <p>
              Design inspirations occur from experience, not the office
              </p>
              <p>
                auraPic is developed to allow designers to capture experiences and build design specifications on the go!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
