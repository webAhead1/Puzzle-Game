import React from "react";
import {
  pic1HardData,
  pic2HardData,
  pic3HardData,
} from "../../Data/HardData/HardLevelData.js";

export function HardBoardPic1(props) {
  useEffect(() => {
    props.setBoard(pic1HardData);
  }, []);
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
export function HardBoardPic2(props) {
  useEffect(() => {
    props.setBoard(pic2HardData);
  }, []);
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
export function HardBoardPic3(props) {
  useEffect(() => {
    props.setBoard(pic3HardData);
  }, []);
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
