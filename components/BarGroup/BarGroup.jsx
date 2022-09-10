import React from "react";
import UserInBarGroup from "./UserInBarGroup";
import HelpInBarGroup from "./HelpInBarGroup";
import SettingsInBarGroup from "./SettingsInBarGroup";

export default function BarGroup(props) {
  const userIcon = props.userIcon;
  const setUserIcon = props.setUserIcon;
  const helpIcon = props.helpIcon;
  const setHelpIcon = props.setHelpIcon;
  const settingsIcon = props.settingsIcon;
  const setSettingsIcon = props.setSettingsIcon;

  return (
    <label htmlFor="idn">
      <form id="logo"></form>
      <form id="userClick">
        <UserInBarGroup userIcon={userIcon} setUserIcon={setUserIcon} />
      </form>
      <form id="helpClick">
        <HelpInBarGroup helpIcon={helpIcon} setHelpIcon={setHelpIcon} />
      </form>
      <form id="settingsClick">
        <SettingsInBarGroup
          settingsIcon={settingsIcon}
          setSettingsIcon={setSettingsIcon}
        />
      </form>
    </label>
  );
}
