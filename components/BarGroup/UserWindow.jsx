import React from "react";

export default function UserWindow(props) {
  const username = props.username;
  const setUsername = props.setUsername;
  return (
    <div>
      <div>Enter username</div>
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
