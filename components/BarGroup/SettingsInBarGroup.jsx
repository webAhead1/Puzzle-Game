import React from "react";

export default function SettingsInBarGroup(props) {
  const settingsIcon = props.settingsIcon;
  const setSettingsIcon = props.setSettingsIcon;
  const settingsClick = () => setSettingsIcon(!settingsIcon);
  return (
    <label htmlFor="idn">
      <input
        type="button"
        name="settingsIcon"
        key="settingsIcon"
        onClick={settingsClick}
        onChange={(e) => setSettingsIcon(e.target.onClick)}
      >
        <img src="/pic/settings-icon.png" />
      </input>
    </label>
  );
}
