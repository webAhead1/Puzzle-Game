import React from "react";

export default function ChooseLevelGroup(props) {

  const easy = props.easy;
  const setEasy = props.setEasy;
  //const easyClick = () => setEasy(!easy);
  const medium = props.medium;
  const setMedium = props.setMedium;
  //const middleClick = () => setMiddle(!middle);
  const hard = props.hard;
  const setHard = props.setHard;
  //const hardClick = () => setHard(!hard);
  const [isEasyActive, setIsEastActive] = React.useState(false);
  const [isMediumActive, setIsMediumtActive] = React.useState(false);
  const [isHardActive, setIsHardActive] = React.useState(false);
  const handleEasyClick = () => setIsEastActive(!isEasyActive)
  const handleMediumClick = () => setIsMediumtActive(!isMediumActive)
  const handleHardClick = () => setIsHardActive(!isHardActive)


  const divEasyStyle = {
    backgroundColor: isEasyActive ? '#42032C' : null,
    color: isEasyActive ? '#D36B00' : null
  }
  const divMediumStyle = {
    backgroundColor: isMediumActive ? '#42032C' : null,
    color: isMediumActive ? '#D36B00' : null
  }
  const divHardStyle = {
    backgroundColor: isHardActive ? '#42032C' : null,
    color: isHardActive ? '#D36B00' : null
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
          {easy}

        </div>
      </label>

      <label className="levels">
        <div
          className="mediumLevel"
          style={divMediumStyle}
          onClick={handleMediumClick}
        >
          {medium}
        </div>
      </label>

      <label className="levels">
        <div
          className="hardLevel"
          style={divHardStyle}
          onClick={handleHardClick}
        >
          {hard}
        </div>
      </label>
    </label>
  );
}