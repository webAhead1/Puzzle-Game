import React from "react";
import Board from "./Board";

export default function MiddleLevelPuzzle(props) {
  const [level, setLevel] = React.useState(4);
  return <Board level={level} setLevel={setLevel} />;
}
