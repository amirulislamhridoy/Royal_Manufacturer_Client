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
        <div className="overflow-x-auto">
          <table className="table w-full border-2">
            <tr>
              <th>Question</th>
              <th>How will you improve the performance of a React Application?</th>
            </tr>
            <tr className='border-2'>
              <th>Answer</th>
              <td>This will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways where you can still speed up your React application.
                1. Dependency Optimization
                2. use React.Fragments
                3. avoiding props in initial states
                4. Consider Server-side Rendering          
              </td>
            </tr>
            <tr>
              <th>Question</th>
              <th>What are the different ways to manage a state in a React application?</th>
            </tr>
            <tr className='border-2'>
              <th>Answer</th>
              <td>
                We can manage state by four kinds.
                <br />
                1) Local state : Local state is data we manage in one or another component.
                2) Global state : Global state is data we manage across multiple components.
                3) Server State : Server state Data that comes from an external server that server that must be integrated with our UI state.
                4) URL state : Data that exists on our URLs, including the pathname and query parameters.
              </td>
            </tr>
            <tr>
              <th>Question</th>
              <th></th>
            </tr>
            <tr className='border-2'>
              <th>Answer</th>
              <td></td>
            </tr>
            <tr>
              <th>Question</th>
              <th>
                Why you do not set the state directly in React. For example, if
                you have const [products, setProducts] = useState([]). Why you
                do not set products = [...] instead, you use the setProducts?
              </th>
            </tr>
            <tr className='border-2'>
              <th>Answer</th>
              <td>
                States are a data store which contains the data of a component.
                React state is a plain JavaScript object that holds information
                that influences the output of a render. When you directly update
                the state, it does not change this.state immediately.
              </td>
            </tr>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
