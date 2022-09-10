import React from "react";

export default function HelpInBarGroup(props) {
  const helpIcon = props.helpIcon;
  const setHelpIcon = props.setHelpIcon;
  const helpClick = () => setHelpIcon(!helpIcon);
  return (
    <label htmlFor="idn">
      <input
        type="button"
        name="helpIcon"
        key="helpIcon"
        onClick={helpClick}
        onChange={(e) => setHelpIcon(e.target.onClick)}
      >
        <img src="/pic/help-icon.png" />
      </input>
    </label>
  );
}
