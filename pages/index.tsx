import {Hero} from '@components/Hero/Hero';
import {Layout} from '@components/Layout';
import type {NextPage} from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>modern interior</title>
      </Head>
      <Layout header footer>
        <Hero />
      </Layout>
    </>
  );
};

export default Home;
