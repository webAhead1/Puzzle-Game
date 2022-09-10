import React from "react";
import Group5 from "./Group5";

export default function ChooseLevelGroup(props) {
  return (
    <label htmlFor="idn2">
      <label className="group4">
        <h3>Choose level</h3>
      </label>
      <form id="levelClick">
        <Group5 props={props} />
      </form>
    </label>
  );
}
