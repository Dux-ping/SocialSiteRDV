import React from "react";
import Post from "./Post";

function Feed(props) {
  const buildFeed = () => {
    let existingPosts = props.posts?.map((post, i) => {
      return (
        <Post
          key={i}
          username={post.username}
          body={post.body}
          image={post.image}
          likes={post.likes}
          comment={post.comments}
        />
      );
    });
    return existingPosts;
  };

  return <div style={{ marginTop: "5rem" }}>{buildFeed()}</div>;
}

export default Feed;
