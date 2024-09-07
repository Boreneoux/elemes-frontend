import { NextPage } from 'next';
import Head from 'next/head';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import CategoryBrowser from '@/components/Categories';
import TrendingCategory from '@/components/TrendingCategory';
import Footer from '@/components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Elemes</title>
        <meta name="description" content="Elemes landing page" />
      </Head>
      <div className="upper-section">
        <Navbar />
        <HeroSection />
      </div>
      <div>
        <CategoryBrowser />
      </div>
      <TrendingCategory />
      <div className="hidden md:flex md:px-32 rounded-lg">
        <Footer />
      </div>
      <div className="hidden md:block my-12 pt-8 text-center text-sm text-gray-500">
        © 2021 ELEMES ID. ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default Home;
