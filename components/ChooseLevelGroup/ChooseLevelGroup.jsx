import React from "react";

export default function ChooseLevelGroup(props) {

  const easy = props.easy;
  const setEasy = props.setEasy;
  const medium = props.medium;
  const setMedium = props.setMedium;
  const hard = props.hard;
  const setHard = props.setHard;

  // const [isEasyActive, setIsEastActive] = React.useState(false);
  // const [isMediumActive, setIsMediumtActive] = React.useState(false);
  // const [isHardActive, setIsHardActive] = React.useState(false);

  const handleEasyClick = () => {
    setEasy(!easy)
    setMedium(false)
    setHard(false)
  }
  const handleMediumClick = () => {
    setEasy(false)
    setMedium(!medium)
    setHard(false)
  }
  const handleHardClick = () => {
    setEasy(false)
    setMedium(false)
    setHard(!hard)
  }

  const divEasyStyle = {
    backgroundColor: easy ? '#42032C' : null,
    color: easy ? '#D36B00' : null
  }
  const divMediumStyle = {
    backgroundColor: medium ? '#42032C' : null,
    color: medium ? '#D36B00' : null
  }
  const divHardStyle = {
    backgroundColor: hard ? '#42032C' : null,
    color: hard ? '#D36B00' : null
  }

  return (
    <label>
      <div className="ChooseLevel">Choose Level</div>
      <label className="levels">
        <div
          className="easyLevel"
          style={divEasyStyle}
          onClick={handleEasyClick}
        >
          Easy

        </div>
      </label>

      <label className="levels">
        <div
          className="mediumLevel"
          style={divMediumStyle}
          onClick={handleMediumClick}
        >
          Medium
        </div>
      </label>

      <label className="levels">
        <div
          className="hardLevel"
          style={divHardStyle}
          onClick={handleHardClick}
        >
          Hard
        </div>
      </label>
    </label>
  );
}