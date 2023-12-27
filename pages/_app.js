import '@/styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://ap-southeast-2.cdn.hygraph.com/content/clqnq0mpooqnq01t8dsu27hzn/master',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
