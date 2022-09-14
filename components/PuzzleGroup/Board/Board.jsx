import React from "react";
import "./BoardStyle.css";
import EasyBoardPic1 from "./EasyBoard/EasyBoard";
import EasyBoardPic2 from "./EasyBoard/EasyBoard";
import EasyBoardPic3 from "./EasyBoard/EasyBoard";
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
  if (props.level == 3 && props.pic1) {
    return <EasyBoardPic1 />;
  } else if (props.level == 3 && props.pic2) {
    return <EasyBoardPic2 />;
  } else if (props.level == 3 && props.pic3) {
    return <EasyBoardPic3 />;
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
