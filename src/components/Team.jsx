import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="thumbnail">
                    {" "}
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
        <div className="col-md-8 col-md-offset-2 section-title">
        </div>
        <div className="col-md-8 col-md-offset-2 section-title">
          <a
            href="#features"
            className="btn btn-custom btn-lg page-scroll"
          >
            Download auraPic
          </a>{" "}

        <div className="col-md-8 col-md-offset-2 section-title">
        </div>
        </div>
    </div>
  );
};

