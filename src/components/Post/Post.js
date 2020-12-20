import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Post = (props) => {

  return (
    <div className="post">
    <Router>
      <h1> <Link to={`/posts/${props.id}`}> {props.title} </Link> </h1>
      <p> {props.content} </p>
    </Router>
    </div>
  );
};

export default Post;
