import React, { useEffect } from "react";
import {
  pic1EasyData,
  pic2EasyData,
  pic3EasyData,
} from "../../Data/EasyData/EasyLevelData.js";

export function EasyBoardPic1(props) {
  useEffect(() => {
    props.setBoard(pic1EasyData);
  }, []);

  return (
    <div>
      <div
        className="backgroundBoard"
        style={{
          backgroundColor: "#D36B00",
        }}
      ></div>
      <div className="boardEasy">
        {pic1EasyData.map((pic, index) => (
          <div className="PicCellEasy" key={pic}>
            <img className="imgStyleEasy" onClick={() => 1} src={pic}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
export function EasyBoardPic2(props) {
  return (
    <div>
      <div
        className="backgroundBoard"
        style={{
          backgroundColor: "#D36B00",
        }}
      ></div>
      <div className="boardEasy">
        {pic2EasyData.map((pic) => (
          <div className="PicCellEasy" key={pic}>
            <img className="imgStyleEasy" src={pic}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
export function EasyBoardPic3(props) {
  return (
    <div>
      <div
        className="backgroundBoard"
        style={{
          backgroundColor: "#D36B00",
        }}
      ></div>
      <div className="boardEasy">
        {pic3EasyData.map((pic) => (
          <div className="PicCellEasy" key={pic}>
            <img className="imgStyleEasy" src={pic}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
