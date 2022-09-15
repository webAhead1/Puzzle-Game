import React, { useEffect } from "react";

import {
  pic1MiddleData,
  pic2MiddleData,
  pic3MiddleData,
} from "../../Data/MiddleData/MiddleLevelData.js";

import {
  pic1MiddleSolution,
  pic2MiddleSolution,
  pic3MiddleSolution,
} from "../../Data/MiddleData/MiddleLevelData";

export function MiddleBoardPic1(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const done = props.done;
  const setDone = props.setDone;

  useEffect(() => {
    if (pic1MiddleData.every(() => pic1MiddleSolution === pic1MiddleData))
      setDone(true);
    // compare with solution with .every()
  }, [board]);

  useEffect(() => {
    setBoard(pic1MiddleData);
  }, []);

  return (
    <div>
      <div
        className="backgroundBoard"
        style={{
          backgroundColor: "#D36B00",
        }}
      ></div>
      <div className="boardMiddle">
        {pic1MiddleData.map((pic, index) => (
          <div className="PicCellMiddle" key={pic}>
            <img
              className="imgStyleMiddle"
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
export function MiddleBoardPic2(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const done = props.done;
  const setDone = props.setDone;

  useEffect(() => {
    if (pic2MiddleData.every(() => pic2MiddleSolution === pic2MiddleData))
      setDone(true);
    // compare with solution with .every()
  }, [board]);

  useEffect(() => {
    setBoard(pic2MiddleData);
  }, []);

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
            <img
              className="imgStyleMiddle"
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
export function MiddleBoardPic3(props) {
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const done = props.done;
  const setDone = props.setDone;

  useEffect(() => {
    if (pic3MiddleData.every(() => pic3MiddleSolution === pic3MiddleData))
      setDone(true);
    // compare with solution with .every()
  }, [board]);

  useEffect(() => {
    setBoard(pic3MiddleData);
  }, []);

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
            <img
              className="imgStyleMiddle"
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
