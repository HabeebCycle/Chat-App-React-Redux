import React from "react";
import "./Header.css";

function Header(props) {
  const { name, status, profile_pic } = props.user;

  return (
    <header className="Header">
      <img src={profile_pic} alt={name} className="Header__pic" />
      <div className="Header__details">
        <h1 className="Header__name">{name}</h1>
        <p className="Header__status">{status}</p>
      </div>
    </header>
  );
}

export default Header;
