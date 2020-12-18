import './App.css';
import React from "react";
import PostContainer from './components/PostContainer'
import Header from './components/Header'
function App() {

  const samplePosts = [
    {
      title: "post 1",
      content: "this is post 1s content"
    },
    {
      title: "post 2",
      content: "this is post 2s content"
    },
    {
      title: "post 3",
      content: "this is post 3s content"
    },
    {
      title: "post 4",
      content: "this is post 4s content"
    },
    {
      title: "post 5",
      content: "this is post 5s content"
    },
    {
      title: "post 6",
      content: "this is post 6s content"
    },
  ]

  return (
    <>
      <Header />
      <div className="App">
        <PostContainer posts={samplePosts} />
      </div>
    </>
  );
}

export default App;
