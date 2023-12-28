import '@/styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_URL,
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
