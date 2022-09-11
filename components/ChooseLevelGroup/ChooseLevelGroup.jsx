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
      <div className="ChooseLevel">Choose Level</div>
      <label className="levels">
        <div
          className="easyLevel"
          onClick={() => {
            easyClick();
          }}
        >
          easy
        </div>
      </label>

      <label className="levels">
        <div
          className="middleLevel"
          onClick={() => {
            middleClick();
          }}
        >
          middle
        </div>
      </label>

      <label className="levels">
        <div
          className="hardLevel"
          onClick={() => {
            hardClick();
          }}
        >
          <div>hard</div>
        </div>
      </label>
    </label>
  );
}
