import React from "react";
import {
  pic1MiddleData,
  pic2MiddleData,
  pic3MiddleData,
} from "../../Data/MiddleData/MiddleLevelData.js";

export function MiddleBoardPic1(props) {
  return (
    <div>
      <div
        className="backgroundBoard"
        style={{
          backgroundColor: "#D36B00",
        }}
      ></div>
      <div className="boardMiddle">
        {pic1MiddleData.map((pic) => (
          <div className="PicCellMiddle" key={pic}>
            <img className="imgStyleMiddle" src={pic}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
export function MiddleBoardPic2(props) {
  return (
    <div>
      <div
        className="backgroundBoard"
        style={{
          backgroundColor: "#D36B00",
        }}
      ></div>
      <div className="boardMiddle">
        {pic2MiddleData.map((pic) => (
          <div className="PicCellMiddle" key={pic}>
            <img className="imgStyleMiddle" src={pic}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
export function MiddleBoardPic3(props) {
  return (
    <div>
      <div
        className="backgroundBoard"
        style={{
          backgroundColor: "#D36B00",
        }}
      ></div>
      <div className="boardMiddle">
        {pic3MiddleData.map((pic) => (
          <div className="PicCellMiddle" key={pic}>
            <img className="imgStyleMiddle" src={pic}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
