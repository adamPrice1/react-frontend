import React from "react";
import PostContainer from '../PostContainer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const Header = () => {


  return (

    <div className="header navbar">
      <Link to="/"> Home </Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/about"> About </Link>
    </div>

  );
};

export default Header;
