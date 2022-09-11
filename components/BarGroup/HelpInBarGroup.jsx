import React from "react";

export default function HelpInBarGroup(props) {
  const helpIcon = props.helpIcon;
  const setHelpIcon = props.setHelpIcon;
  const helpClick = () => setHelpIcon(!helpIcon);
  return (
    <label htmlFor="idn" className="idn">
      <img
        src="/pic/help-icon.png"
        onClick={() => {
          helpClick();
        }}
      />
    </label>
  );
}
