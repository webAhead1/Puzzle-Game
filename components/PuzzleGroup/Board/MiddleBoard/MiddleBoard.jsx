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
} from "../Data/MiddleData/MiddleLevelData";

export function MiddleBoardPic1(props) {
<<<<<<< HEAD
  useEffect(() => {
    props.setBoard(pic2MiddleData);
  }, []);
=======
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const done = props.done;
  const setDone = props.setDone;

  useEffect(() => {
    if (board.every(pic1MiddleSolution)) setDone(true);
    // compare with solution with .every()
  }, [board]);

  useEffect(() => {
    props.setBoard(pic1MiddleData);
  }, []);

>>>>>>> 8842271272c43888f74c6dddf32df981c76e010c
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
<<<<<<< HEAD
  useEffect(() => {
    props.setBoard(pic3MiddleData);
  }, []);
=======
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const done = props.done;
  const setDone = props.setDone;

  useEffect(() => {
    if (board.every(pic2MiddleSolution)) setDone(true);
    // compare with solution with .every()
  }, [board]);

  useEffect(() => {
    props.setBoard(pic2MiddleData);
  }, []);

>>>>>>> 8842271272c43888f74c6dddf32df981c76e010c
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
<<<<<<< HEAD
  useEffect(() => {
    props.setBoard(pic1MiddleData);
  }, []);
=======
  const choice1 = props.choice1;
  const setChoice1 = props.setChoice1;
  const choice2 = props.choice2;
  const setChoice2 = props.setChoice2;
  const board = props.board;
  const setBoard = props.setBoard;
  const done = props.done;
  const setDone = props.setDone;

  useEffect(() => {
    if (board.every(pic3MiddleSolution)) setDone(true);
    // compare with solution with .every()
  }, [board]);

  useEffect(() => {
    props.setBoard(pic3MiddleData);
  }, []);

>>>>>>> 8842271272c43888f74c6dddf32df981c76e010c
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
