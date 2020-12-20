import React from "react";
import samplePosts from '../../samplePosts.json'


const ExpandedPost = ( {match} ) => {


  const postData = samplePosts.find((post) => { return post.id == match.params.id })

  return (
    <div>
      <h1> {postData.title} </h1>
      <h3> {postData.content} </h3>
    </div>
  );
};

export default ExpandedPost;
