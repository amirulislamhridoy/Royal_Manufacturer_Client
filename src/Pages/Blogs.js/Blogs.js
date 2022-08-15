import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../Shared/Header/Header';

const Blogs = () => {
    return (
        <main>
            <Helmet><title>Blogs</title></Helmet>
            <Header></Header>

            <section>
                <table>
                    <b> How will you improve the performance of a React Application?</b>

                    <b> What are the different ways to manage a state in a React application?</b>

                    <b> How does prototypical inheritance work?</b>

                    <b> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</b>
                    <p>React will then look at the virtual DOM, it also has a copy of the old virtual DOM, that is why we shouldn’t update the state directly, so we can have two different object references in memory, we have the old virtual DOM as well as the new virtual DOM.</p>

                    <b> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</b>

                    <b> What is a unit test? Why should write unit tests?</b>
                </table>
            </section>
        </main>
    );
};

export default Blogs;