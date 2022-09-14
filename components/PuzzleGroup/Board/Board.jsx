import React from "react";
import "./BoardStyle.css";
import EasyBoardPic1 from "./EasyBoard/EasyBoard";
import EasyBoardPic2 from "./EasyBoard/EasyBoard";
import EasyBoardPic3 from "./EasyBoard/EasyBoard";
import MiddleBoardPic1 from "./MiddleBoard/MiddleBoard";
import MiddleBoardPic2 from "./MiddleBoard/MiddleBoard";
import MiddleBoardPic3 from "./MiddleBoard/MiddleBoard";
import HardBoardPic1 from "./HardBoard/HardBoard";
import HardBoardPic2 from "./HardBoard/HardBoard";
import HardBoardPic3 from "./HardBoard/HardBoard";
import EmptyBoard from "./EmptyBoard";

export default function Board(props) {
  if (props.level == 3 && props.pic1) {
    return <EasyBoardPic1 />;
  } else if (props.level == 3 && props.pic2) {
    return <EasyBoardPic2 />;
  } else if (props.level == 3 && props.pic3) {
    return <EasyBoardPic3 />;
  } else if (props.level == 4 && props.pic1) {
    return <MiddleBoardPic1 />;
  } else if (props.level == 4 && props.pic2) {
    return <MiddleBoardPic2 />;
  } else if (props.level == 4 && props.pic3) {
    return <MiddleBoardPic3 />;
  } else if (props.level == 5 && props.pic1) {
    return <HardBoardPic1 />;
  } else if (props.level == 5 && props.pic2) {
    return <HardBoardPic2 />;
  } else if (props.level == 5 && props.pic3) {
    return <HardBoardPic3 />;
  } else return <EmptyBoard/>;
}
