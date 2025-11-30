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
            href="https://www.dropbox.com/scl/fi/p4zx9y45u6x2ljddumggu/auraPic.apk?rlkey=gbx85918yp80g6gvqeq81qzlw&st=f520r011&dl=0"
            className="btn btn-custom btn-lg page-scroll"
          >
            APK download here
          </a>
          <a
            href="https://www.dropbox.com/scl/fi/l379229x65mc8hjee1zcm/cmpt-362-project.zip?rlkey=sn4osotxtm7wesbsrfjyqacyh&st=vdkjipv3&dl=0"
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

