import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shorten Link</title>
      </Head>
      <main className="w-screen h-screen grid place-items-center text-5xl">
        🚀
      </main>
    </>
  )
}

export async function getServerProps() {

  // Return the data as props
  return {
    props: {
      data,
    },
  };
}