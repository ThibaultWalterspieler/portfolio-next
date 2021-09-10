import type { NextPage } from 'next';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Member from '../components/Member/Member';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='global-wrapper'>
        <Header />
        <Member />
      </div>
    </Layout>
  );
};

export default Home;
