import React from "react";
import "./ImageLink.css";
const Imagelink = ({ onIputchange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain Will detect face in your picture.Git it a try "}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="tex"
            onChange={onIputchange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Imagelink;
