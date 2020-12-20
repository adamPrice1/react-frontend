import React from "react";
import Post from '../Post';
import ExpandedPost from '../ExpandedPost'
import samplePosts from '../../samplePosts.json'

const PostContainer = (props) => {

  return (
    <div className="post-container col-md-5">
      {samplePosts.map( post => {
        return (<Post
          key={post.id}
          id= {post.id}
          title={post.title}
          content={post.content}
                />)
      })}
    </div>
  );
};

export default PostContainer;
