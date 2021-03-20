import Head from "next/head";
import Image from "next/image";
import IndexImage from "../components/IndexImage";
import Meta from "../components/Meta";

// https://images.unsplash.com/photo-1616212171623-901340f85e98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D

export default function Home() {
  return (
    <div>
      <Meta title="Home Page" />
      <IndexImage />
    </div>
  );
}
