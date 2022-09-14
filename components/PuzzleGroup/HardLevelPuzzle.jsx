import React from "react";
import Board from "./Board";

export default function HardLevelPuzzle(props) {
  const [level, setLevel] = React.useState(5);
  return <Board level={level} setLevel={setLevel} />;
}
