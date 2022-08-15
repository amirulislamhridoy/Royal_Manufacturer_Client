import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header/Header';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import OurEmployees from './OurEmployees';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <main className='max-w-7xl mx-auto'>
            <Helmet><title>Royal Manufacturer</title></Helmet>
            <Header />
            <Banner />
            <Tools />
            <BusinessSummary />
            <Reviews />
            <OurEmployees />
            <Footer />
        </main>
    );
};

export default Home;