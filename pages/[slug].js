import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const GET_LINK = gql
`
  query LinkUrl($slug: String) {
    linkUrl(where: {shortenLink: $slug}) {
      shortenLink
      iosLink
      androidLink
      createdAt
    }
  }
`

export default function LinkUrl({ slug }) {

  const { loading, error, data } = useQuery(GET_LINK, {
    variables: {
      slug: slug
    }
  })

  const router = useRouter()

  useEffect(() => {
    // Redirect to another URL after the component mounts
    const redirectToLink = (url) => {
      router.push(url);
    };

    if(!loading && data?.linkUrl) {
      redirectToLink(data?.linkUrl.iosLink);
    }
  }, [loading]); // The empty dependency array ensures this effect runs once after the component mounts


  return (
    <main className="w-screen h-screen grid place-items-center text-xs">
      <div>
        <div>Loading...</div>
        <div>{ error && error.message }</div>
      </div>
    </main>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  return {
    props: {
      slug,
    },
  };
}