import React from "react";
import {
  pic1HardData,
  pic2HardData,
  pic3HardData,
} from "../Data/HardData/HardLevelData";

export default function HardBoardPic1(props){
    return (
        <div>
          <div
            className="backgroundBoard"
            style={{
              backgroundColor: "#D36B00",
            }}
          ></div>
          <div className="boardHard">
            {pic1HardData.map((pic) => (
              <div className="PicCellHard" key={pic}>
                <img className="imgStyleHard" src={pic}></img>
              </div>
            ))}
          </div>
        </div>
      );

}
export default function HardBoardPic2(props){
    return (
        <div>
          <div
            className="backgroundBoard"
            style={{
              backgroundColor: "#D36B00",
            }}
          ></div>
          <div className="boardHard">
            {pic2HardData.map((pic) => (
              <div className="PicCellHard" key={pic}>
                <img className="imgStyleHard" src={pic}></img>
              </div>
            ))}
          </div>
        </div>
      );

}
export default function HardBoardPic3(props){
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