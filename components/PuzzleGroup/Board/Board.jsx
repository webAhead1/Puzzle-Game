import React from "react";
import "./BoardStyle.css";
import {
  pic1EasyData,
  pic2EasyData,
  pic3EasyData,
} from "../Data/EsayData/EasyLevelData";
import {
  pic1MiddleData,
  pic2MiddleData,
  pic3MiddleData,
} from "../Data/MiddleData/MiddleLevelData";
import {
  pic1HardData,
  pic2HardData,
  pic3HardData,
} from "../Data/HardData/HardLevelData";

export default function Board(props) {
  if (props.level == 3) {
    return (
      <div>
        <div
          className="backgroundBoard"
          style={{
            backgroundColor: "#D36B00",
          }}
        ></div>
        <div className="boardEasy">
          {pic1EasyData.map((pic) => (
            <div className="PicCellEasy" key={pic}>
              <img className="imgStyleEasy" src={pic}></img>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (props.level == 4) {
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
  } else if (props.level == 5) {
    return (
      <div>
        <div
          className="backgroundBoard"
          style={{
            backgroundColor: "#D36B00",
          }}
        ></div>
        <div className="boardHard">
          {pic3HardData.map((pic) => (
            <div className="PicCellHard" key={pic}>
              <img className="imgStyleHard" src={pic}></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
