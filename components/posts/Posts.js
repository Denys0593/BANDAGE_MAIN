import Link from "next/link";
import Post from "../post/Post";

import "./posts.scss";

const posts = [
  {
    image: "/post1.png",
    alt: "road",
    title: "Loudest à la Madison #1 (L'integral)",
    text: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
  {
    image: "/post2.png",
    alt: "car",
    title: "Loudest à la Madison #1 (L'integral)",
    text: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
  {
    image: "/post3.png",
    alt: "umbrellas",
    title: "Loudest à la Madison #1 (L'integral)",
    text: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: "10 comments",
  },
];

const Posts = () => {
  return (
    <div className="containerPosts">
      <Link href="/" className="containerPosts_practice">
        Practice Advice
      </Link>
      <h2 className="containerPosts_title">Featured Posts</h2>
      <h3 className="containerPosts_subtitle">
        Problems trying to resolve the conflict between <br /> the two major
        realms of Classical physics: Newtonian mechanics
      </h3>
      <Post posts={posts}></Post>
    </div>
  );
};

export default Posts;
