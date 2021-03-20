import { useRouter } from "next/router";
import Head from "next/head";
import Meta from "../../components/Meta";

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await response.json();

  return {
    revalidate: 86400,
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Meta title={post.title} />
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </>
  );
}
