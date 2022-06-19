import Head from 'next/head';

import '../styles/globals.css'
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Nounders Events</title>
        <meta name="description" content='The best is yet to come for the Nouns DAO.' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
