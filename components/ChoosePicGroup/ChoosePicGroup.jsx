import React from "react";

var imgsArray = new Array();
imgsArray[0] = new Image();
imgsArray[0].src = './public/pic/pic1.jpg';
imgsArray[1] = new Image();
imgsArray[1].src = './public/pic/pic2.jpg';
imgsArray[2] = new Image();
imgsArray[2].src = './public/pic/pic3.jpg';


export default function ChoosePicGroup(props) {
  const pic1 = props.pic1;
  const setPic1 = props.setPic1;
  const pic1Click = () => setPic1(!pic1);
  const pic2 = props.pic2;
  const setPic2 = props.setPic2;
  const pic2Click = () => setPic2(!pic2);
  const pic3 = props.pic3;
  const setPic3 = props.setPic3;
  const pic3Click = () => setPic3(!pic3);
  return (
    <fieldset>
      <legend>Choose picture</legend>
      {imgsArray.map(pic => (
        <label className="pictures">
        <img src="/pic/pic1.jpg" onClick={() => {pic1Click();}}/>
        </label>
      ))}
     {imgsArray.map(pic => (
        <label className="pictures">
        <img src="/pic/pic2.jpg" onClick={() => {pic2Click();}}/>
        </label>
      ))}
     {imgsArray.map(pic => (
        <label className="pictures">
        <img src="/pic/pic3.jpg" onClick={() => {pic3Click();}}/>
        </label>
      ))}
    </fieldset>
  );
}
