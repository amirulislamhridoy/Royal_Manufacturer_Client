import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../Shared/Header/Header";

const Blogs = () => {
  return (
    <main>
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <Header></Header>

      <section>
        <h1 className='text-3xl font-semibold mb-2'>Some Questions & answers.</h1>
        <div className="overflow-x-auto">
          <table className="table w-full border-2">
            <tr>
              <th>Question</th>
              <th>
                How will you improve the performance of a React Application?
              </th>
            </tr>
            <tr className="border-2">
              <th>Answer</th>
              <td>
                This will lead to a faster user interface without specifically
                optimizing for performance for many cases, there are ways where
                you can still speed up your React application. 1. Dependency
                Optimization 2. use React.Fragments 3. avoiding props in initial
                states 4. Consider Server-side Rendering
              </td>
            </tr>
            <tr>
              <th>Question</th>
              <th>
                What are the different ways to manage a state in a React
                application?
              </th>
            </tr>
            <tr className="border-2">
              <th>Answer</th>
              <td>
                We can manage state by four kinds.
                <br />
                1) Local state : Local state is data we manage in one or another
                component. 2) Global state : Global state is data we manage
                across multiple components. 3) Server State : Server state Data
                that comes from an external server that server that must be
                integrated with our UI state. 4) URL state : Data that exists on
                our URLs, including the pathname and query parameters.
              </td>
            </tr>
            <tr>
              <th>Question</th>
              <th>
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts?
              </th>
            </tr>
            <tr className="border-2">
              <th>Answer</th>
              <td>
                States are a data store which contains the data of a component.
                React state is a plain JavaScript object that holds information
                that influences the output of a render. When you directly update
                the state, it does not change this.state immediately.
              </td>
            </tr>
            <tr>
              <th>Question</th>
              <th>
                You have an array of products. Each product has a name, price,
                description, etc. How will you implement a search to find
                products by name?
              </th>
            </tr>
            <tr className="border-2">
              <th>Answer</th>
              <td>
                I can use array filter method for this. Because this method is
                used in array and return a array of elements that's are will be
                condition true. Filter method should use for this question.
              </td>
            </tr>
            <tr>
              <th>Question</th>
              <th>What is a unit test? Why should write unit tests?</th>
            </tr>
            <tr className="border-2">
              <th>Answer</th>
              <td>
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit test is
                important process because if done correctly. It can help detect
                early flaws which may be more difficult to find in later testing
                stages.
              </td>
            </tr>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
