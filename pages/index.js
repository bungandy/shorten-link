export default function Home() {
  return (
    <main className="w-screen h-screen grid place-items-center text-xs">Loading...</main>
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