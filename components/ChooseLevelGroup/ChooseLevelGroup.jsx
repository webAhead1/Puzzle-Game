import React from "react";

const levels = [
  "easy",
  "middle",
  "hard"
];

export default function ChooseLevelGroup(props) {
  const easy = props.easy;
  const setEasy = props.setEasy;
  const easyClick = () => setEasy(!easy);
  const middle = props.setMiddle;
  const setMiddle = props.setMiddle;
  const middleClick = () => setMidddle(!middle);
  const hard = props.hard;
  const setHard = props.setHard;
  const hardClick = () => setHard(!hard);
  return (
    <fieldset>
      <legend>Choose level</legend>
      {levels.map(lev => (
        <label className="levels">
         <div> onClick={() => {easyClick();}} </div>
        </label>
      ))}
     {levels.map(lev => (
        <label className="levels">
        <div> onClick={() => {middleClick();}} </div>
        </label>
      ))}
     {levels.map(lev => (
        <label className="levels">
        <div> onClick={() => {hardClick();}} </div>
        </label>
      ))}
    </fieldset>
  );
}
