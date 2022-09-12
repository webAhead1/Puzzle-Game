import React from "react";

export default function UserWindow(props) {
  const username = props.username;
  const setUsername = props.setUsername;
  return (
    <div className="userWindow">
      <div className="f2-g1">
        <div className="enterUsername">Enter username</div>
        <div className="rectangle11"> </div>
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
