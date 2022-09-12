import React from "react";
import style from "./style.module.css";

export default function UserWindow(props) {
  const username = props.username;
  const setUsername = props.setUsername;
  return (
    <div className={style.userWindow}>
      <div className={style["f2-g1"]}>
        <div className={style.enterUsername}>Enter username</div>
        <div className={style.rectangle11}> </div>
      </div>
      <input
        type="text"
        name="username"
        key="username"
        placeholder="Here"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}
