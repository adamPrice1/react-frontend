import React from "react";
import Post from '../Post'

const PostContainer = (props) => {
  return (
    <div class="post-container col-md-5">
      {props.posts.map( post => {
        return (<Post
          key={post.title}
          title={post.title}
          content={post.content}
                />)
      })}
    </div>
  );
};

export default PostContainer;
