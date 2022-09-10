import React from "react";

export default function UserInBarGroup(props) {
  const userIcon = props.userIcon;
  const setUserIcon = props.setUserIcon;
  const userClick = () => setUserIcon(!userIcon);
  return (
    <label htmlFor="idn">
      <input
        type="button"
        name="userIcon"
        key="userIcon"
        onClick={userClick}
        onChange={(e) => setUserIcon(e.target.onClick)}
      >
        <img src="/pic/user-icon.png" />
      </input>
    </label>
  );
}
