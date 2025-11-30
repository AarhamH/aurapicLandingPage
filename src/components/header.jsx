import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text p-4">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="https://www.youtube.com/watch?v=kvBYQjfdqaw"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Project Pitch
                </a>{" "}
                <a
                  href="https://www.youtube.com/watch?v=7p6aaEQ22S0&t=95s"
                  className="btn btn-custom btn-lg page-scroll"
                >
                 Show and Tell #1 
                </a>{" "}
                <a
                  href="https://www.youtube.com/watch?v=Gs4Cg2fZEFI&t=8s"
                  className="btn btn-custom btn-lg page-scroll"
                >
                 Show and Tell #2 
                </a>{" "}
                <a
                  href="https://www.youtube.com/watch?v=DknOAvMYFgQ"
                  className="btn btn-custom btn-lg page-scroll"
                >
                 Final Demo 
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
