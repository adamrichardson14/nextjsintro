import Head from "next/head";

export default function Meta({title}) {
  return (
    <Head>
      <title>Awesome Blog | {title}</title>
    </Head>
  )
}