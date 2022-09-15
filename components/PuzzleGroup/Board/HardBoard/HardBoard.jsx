import React, { useEffect } from "react";

import {
  pic1HardData,
  pic2HardData,
  pic3HardData,
} from "../../Data/HardData/HardLevelData.js";

import {
  pic1HardSolution,
  pic2HardSolution,
  pic3HardSolution,
} from "../Data/HardData/HardLevelData";

export function HardBoardPic1(props) {
<<<<<<< HEAD
  useEffect(() => {
    props.setBoard(pic1HardData);
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
    if (board.every(pic1HardSolution)) setDone(true);
    // compare with solution with .every()
  }, [board]);

  useEffect(() => {
    props.setBoard(pic1HardData);
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
      <div className="boardHard">
        {pic1HardData.map((pic, index) => (
          <div className="PicCellHard" key={pic}>
            <img
              className="imgStyleHard"
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
export function HardBoardPic2(props) {
<<<<<<< HEAD
  useEffect(() => {
    props.setBoard(pic2HardData);
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
    if (board.every(pic2HardSolution)) setDone(true);
    // compare with solution with .every()
  }, [board]);

  useEffect(() => {
    props.setBoard(pic2HardData);
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
      <div className="boardHard">
        {pic2HardData.map((pic) => (
          <div className="PicCellHard" key={pic}>
            <img
              className="imgStyleHard"
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
export function HardBoardPic3(props) {
<<<<<<< HEAD
  useEffect(() => {
    props.setBoard(pic3HardData);
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
    if (board.every(pic3HardSolution)) setDone(true);
    // compare with solution with .every()
  }, [board]);

  useEffect(() => {
    props.setBoard(pic3HardData);
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
      <div className="boardHard">
        {pic3HardData.map((pic) => (
          <div className="PicCellHard" key={pic}>
            <img
              className="imgStyleHard"
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
