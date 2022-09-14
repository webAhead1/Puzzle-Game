import React from "react";
import easyData from "./Data/EasyLevelData";
import middleData from "./Data/MiddleLevelData";
import hardData from "./Data/HardLevelData";
import "./BoardStyle.css";
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
          {easyData.map((pic) => (
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
          {middleData.map((pic) => (
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
          {hardData.map((pic) => (
            <div className="PicCellHard" key={pic}>
              <img className="imgStyleHard" src={pic}></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
