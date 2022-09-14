import React from "react";
import EasyLevelPuzzle from "./EasyLevelPuzzle";
import MiddleLevelPuzzle from "./MiddleLevelPuzzle";
import HardLevelPuzzle from "./HardLevelPuzzle";
import EmptyBoard from "./EmptyBoard";

export default function PuzzleGroup(props) {
  const pic1 = props.pic1;
  const pic2 = props.pic2;
  const pic3 = props.pic3;
  const easy = props.easy;
  const middle = props.middle;
  const hard = props.hard;
  if (easy) {
    return <EasyLevelPuzzle />;
  } else if (middle) {
    return <MiddleLevelPuzzle />;
  } else if (hard) {
    return <HardLevelPuzzle />;
  } else return <EmptyBoard />;
}
