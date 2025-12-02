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
            href="https://www.dropbox.com/scl/fi/nykevrvkij9q1wmbek7f3/auraPic.apk?rlkey=rg18eq1ewrd4wdzmpnv9eh6gc&st=xbr2s9z1&dl=0"
            className="btn btn-custom btn-lg page-scroll"
          >
            APK download here
          </a>
          <a
            href="https://www.dropbox.com/scl/fi/gbs8fo9expw70ty995673/cmpt-362-project.zip?rlkey=uiw4crwjz0bzp7nj6iw2i7yzm&st=w29ppabj&dl=0"
            className="btn btn-custom btn-lg page-scroll"
          >
            Download ZIP
          </a>
        </div>
        <div className="col-md-8 col-md-offset-2 section-title">
        </div>
    </div>
  );
};

