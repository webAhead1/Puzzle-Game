import React from "react";

export default function ChooseLevelGroup(props) {
  const easy = props.easy;
  const setEasy = props.setEasy;
  const easyClick = () => setEasy(!easy);
  const middle = props.setMiddle;
  const setMiddle = props.setMiddle;
  const middleClick = () => setMiddle(!middle);
  const hard = props.hard;
  const setHard = props.setHard;
  const hardClick = () => setHard(!hard);
  return (
    <label>
      <div>Choose level</div>
      <label className="levels">
        <div
          onClick={() => {
            easyClick();
          }}
        >
          easy
        </div>
      </label>

      <label className="levels">
        <div
          onClick={() => {
            middleClick();
          }}
        >
          middle
        </div>
      </label>

      <label className="levels">
        <div
          onClick={() => {
            hardClick();
          }}
        >
          hard
        </div>
      </label>
    </label>
  );
}
