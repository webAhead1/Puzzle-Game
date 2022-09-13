import React from "react";
import data from "./pic1/EasyLevelData";
import "./BoardStyle.css";
export default function Board (props) {
    return (
        <div className="board">
          {
            data.map(
              (pic) => (<div className="PicCell" key={pic}><img className="imgStyle" src={pic}></img></div>)
            )
          }
        </div>
    );
}