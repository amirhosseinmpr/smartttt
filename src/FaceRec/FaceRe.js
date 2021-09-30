import React from "react";

const FaceRe = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id={"inputimage"}
          alt={"image"}
          src={imageUrl}
          width="500px"
          height="auto"
        />
      </div>
    </div>
  );
};

export default FaceRe;
