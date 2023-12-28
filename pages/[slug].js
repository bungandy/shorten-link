import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isAndroid, isIOS } from 'react-device-detect';


const GET_LINK = gql
`
  query LinkUrl($slug: String) {
    linkUrl(where: {shortenLink: $slug}) {
      webLink
      iosLink
      androidLink
    }
  }
`

export default function LinkUrl({ slug }) {
  const router = useRouter()

  const { loading, error, data } = useQuery(GET_LINK, {
    variables: {
      slug: slug
    }
  })

  useEffect(() => {
    // Redirect to another URL after the component mounts
    const redirectToLink = (url) => {
      console.log(url)
      router.push(url);
    };

    // check if schema available
    // const match = url.match('/^([a-zA-Z0-9-]+):\/\//')
    // const schemaName = match ? match[1] : null
    // if(schemaName){}

    // web is default
    let target = data?.linkUrl.webLink

    if(isIOS){
      target = data?.linkUrl.iosLink
    }
    else if(isAndroid){
      target = data?.linkUrl.androidLink
    }

    if(!loading && target) {
      redirectToLink(target);
    }
  }, [loading]); // The empty dependency array ensures this effect runs once after the component mounts


  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <main className="w-screen h-screen grid place-items-center text-xs">
        <div>
          <div>Loading...</div>
          <div>{ error && error.message }</div>
        </div>
      </main>
    </>
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