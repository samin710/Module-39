import { use } from "react";
import Post from "./Post";

export default function Posts({ fetchPosts }) {
  const posts = use(fetchPosts);
  //   console.log(post);
  return (
    <div className="card">
      <h2>Total posts: {posts.length}</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
