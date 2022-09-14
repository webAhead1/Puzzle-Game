import React from "react";
import Board from "./Board";

export default function EasyLevelPuzzle(props) {
  const [level, setLevel] = React.useState(3);
  return <Board level={level} setLevel={setLevel} />;
}
