import React from "react";
import Group3 from "../ChoosePicGroup/Group3";

export default function ChoosePicGroup(props) {
  return (
    <label htmlFor="idn2">
      <label className="group2">
        <h3>Choose picture</h3>
      </label>
      <form id="picClick">
        <Group3 props={props} />
      </form>
    </label>
  );
}
