import './App.css';
import React from "react";
import PostContainer from './components/PostContainer'
import ExpandedPost from './components/ExpandedPost'
import Header from './components/Header'
import About from './components/About'
import Profile from './components/Profile'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function App() {



  return (
    <>
      <Router>
        <Header />
        <Switch>
        <div className="App">
          <Route path="/" exact component={PostContainer} />
          <Route path="/posts/:id" component={ExpandedPost} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
