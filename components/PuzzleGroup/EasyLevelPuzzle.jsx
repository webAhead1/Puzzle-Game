import React from "react";
import ReactDOM from "react-dom";
import data from "./pic1/EasyLevelData";
import Board from "./Board";
export default function EasyLevelPuzzle(props){
    const [level, setLevel] = React.useState(3);
    return(
        <Board
            level = {level} 
            setLevel = {setLevel}
        />
    );
}