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
            href="https://www.dropbox.com/scl/fi/oyf3i0wpttds6j85g7uk2/cmpt-362-project.zip?rlkey=o0igoxwohkgixjvqzs0sm2pat&st=8wvna34s&dl=0"
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

