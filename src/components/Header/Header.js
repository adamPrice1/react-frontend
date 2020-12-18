import React from "react";

const Header = () => {

  var menuItems = [
    "home",
    "login",
    "signup",
    "profile"
  ]
  return (
    <div className="header navbar">
      {
      menuItems.map( item => {
        return <a key={item} href="https://google.com" > {item} </a>
      })
    }
    </div>
  );
};

export default Header;
