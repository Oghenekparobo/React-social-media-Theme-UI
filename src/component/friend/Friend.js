import React from "react";

export default function friend({user}) {
  return (
    <li className="sidebar-friend">
      <img
        src={user. profilePicture}
        alt="friend"
        className="sidebar-friend__img"
      />
      <span className="sidebar-friend__name">{user.username}</span>
    </li>
  );
}
