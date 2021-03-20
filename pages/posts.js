import React from "react";
import Link from "next/link";

// https://jsonplaceholder.typicode.com/posts

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    revalidate: 300,
    props: {
      postData: data,
    },
  };
};

const Posts = ({ postData }) => {
  return (
    <>
      {postData &&
        postData.map((post) => (
          <div style={{ margin: "10px 20px" }} key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </div>
        ))}
    </>
  );
};

export default Posts;
