import React, { useEffect } from "react";

import {
  pic1EasyData,
  pic2EasyData,
  pic3EasyData,
} from "../../Data/EasyData/EasyLevelData.js";

import {
  pic1EasySolution,
  pic2EasySolution,
  pic3EasySolution,
} from "../../Data/EasyData/EasyLevelData";

export function EasyBoardPic1(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const done = props.done;
  const setDone = props.setDone;

  useEffect(() => {
    if (pic1EasyData.every(() => pic1EasySolution === pic1EasyData))
      setDone(true);
    // compare with solution with .every()
  }, [board]);

  useEffect(() => {
    setBoard(pic1EasyData);
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
            <img
              className="imgStyleEasy"
              onClick={() => {
                choice1 ? null : setChoice1(index);
                choice2 ? null : setChoice2(index);
              }}
              src={pic}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
export function EasyBoardPic2(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const done = props.done;
  const setDone = props.setDone;

  useEffect(() => {
    if (pic2EasyData.every(() => pic2EasySolution === pic2EasyData))
      setDone(true);
    // compare with solution with .every()
  }, [board]);

  useEffect(() => {
    setBoard(pic2EasyData);
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
        {pic2EasyData.map((pic) => (
          <div className="PicCellEasy" key={pic}>
            <img
              className="imgStyleEasy"
              onClick={() => {
                choice1 ? null : setChoice1(index);
                choice2 ? null : setChoice2(index);
              }}
              src={pic}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
export function EasyBoardPic3(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const done = props.done;
  const setDone = props.setDone;

  useEffect(() => {
    if (pic3EasyData.every(() => pic3EasySolution === pic3EasyData))
      setDone(true);
    // compare with solution with .every()
  }, [board]);

  useEffect(() => {
    setBoard(pic3EasyData);
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
        {pic3EasyData.map((pic) => (
          <div className="PicCellEasy" key={pic}>
            <img
              className="imgStyleEasy"
              onClick={() => {
                choice1 ? null : setChoice1(index);
                choice2 ? null : setChoice2(index);
              }}
              src={pic}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
export default { EasyBoardPic1, EasyBoardPic2, EasyBoardPic3 };
