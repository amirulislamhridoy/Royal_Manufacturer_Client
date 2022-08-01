import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../Shared/Header/Header';
import Banner from './Banner';

const Home = () => {
    return (
        <main className='max-w-7xl mx-auto'>
            <Helmet><title>Home</title></Helmet>
            <Header />
            <Banner />
        </main>
    );
};

export default Home;