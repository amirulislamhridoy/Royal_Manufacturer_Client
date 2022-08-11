import React from 'react';
import { Helmet } from 'react-helmet';
import notFound from '../../photos/404-pages.jpg'
import Header from '../../Shared/Header/Header';

const NotFound = () => {
    return (
        <section>
            <Header></Header>
            <Helmet><title>Royal Manufacturer NotFound</title></Helmet>
            <img src={notFound} alt="" />
        </section>
    );
};

export default NotFound;