import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../Shared/Header/Header";

const MyPortFolio = () => {
  return (
    <main>
      <Helmet>
        <title>My Portfolio</title>
      </Helmet>
      <Header />

      <h1 className="text-2xl font-medium">Amirul Islam Hridoy</h1>
      <p className="">
        <i>amirulislamhridoy30687@gmail.com</i>
      </p>

      <h2 className='text-xl mt-5 mb-2 font-semibold'>List of Skills</h2>
      <div className='md:flex'>
        <table>
          <tr>
            <td className='font-medium'>Html5</td>
            <td></td>
            <td>
              <progress class="progress progress-dark w-56" value="100" max="100"></progress>
            </td>
          </tr>
          <tr>
            <td className='font-medium'>CSS3</td>
            <td></td>
            <td>
              <progress class="progress progress-dark w-56" value="100" max="100"></progress>
            </td>
          </tr>
          <tr>
            <td className='font-medium'>Bootstrap</td>
            <td></td>
            <td><progress class="progress progress-dark w-56" value="100" max="100"></progress></td>
          </tr>
          <tr>
            <td className='font-medium'>Tailwind css</td>
            <td></td>
            <td><progress class="progress progress-dark w-56" value="100" max="100"></progress></td>
          </tr>
          <tr>
            <td className='font-medium'>DaisyUI</td>
            <td></td>
            <td><progress class="progress progress-dark w-56" value="100" max="100"></progress></td>
          </tr>
          <tr>
            <td className='font-medium'>JavaScript</td>
            <td></td>
            <td><progress class="progress progress-dark w-56" value="80" max="80"></progress></td>
          </tr>
          <tr>
            <td className='font-medium'>Rest API</td>
            <td></td>
            <td><progress class="progress progress-dark w-56" value="100" max="100"></progress></td>
          </tr>
          <tr>
            <td className='font-medium'>React</td>
            <td></td>
            <td><progress class="progress progress-dark w-56" value="80" max="80"></progress></td>
          </tr>
        </table>
        <table className='md:ml-20'>
          <tr>
            <td className='font-medium'>React Router</td>
            <td></td>
            <td><progress class="progress progress-dark w-56" value="100" max="100"></progress></td>
          </tr>
          <tr>
            <td className='font-medium'>Firebase</td>
            <td></td>
            <td><progress class="progress progress-dark w-56" value="80" max="100"></progress></td>
          </tr>
          <tr>
            <td className='font-medium'>Firebase Hooks</td>
            <td></td>
            <td><progress class="progress progress-dark w-56" value="80" max="100"></progress></td>
          </tr>
          <tr>
            <td className='font-medium'>Json Web Token</td>
            <td></td>
            <td><progress class="progress progress-dark w-56" value="100" max="100"></progress></td>
          </tr>
          <tr>
            <td className='font-medium'>Mongodb Atlas</td>
            <td></td>
            <td><progress class="progress progress-dark w-56" value="90" max="100"></progress></td>
          </tr>
          <tr>
            <td className='font-medium'>Node JS</td>
            <td></td>
            <td><progress class="progress progress-dark w-56" value="70" max="100"></progress></td>
          </tr>
          <tr>
            <td className='font-medium'>Express JS</td>
            <td></td>
            <td><progress class="progress progress-dark w-56" value="70" max="100"></progress></td>
          </tr>
        </table>
      </div>

      <div className='mt-5'>
        <h2 className='text-xl font-semibold'>My Live Website Link</h2>
        <a className='text-blue-500 hover:underline' href='https://velvety-entremet-267826.netlify.app/' target='_blank' alt=''>Bike Warehouse</a>
        <br />
        <a className='text-blue-500 hover:underline' href='https://assignment-10-doctor-1d2b0.web.app/' target='_blank' alt=''>Dr. Luke Slater</a>
        <br />
        <a className='text-blue-500 hover:underline' href='https://assignment-10-doctor-1d2b0.web.app/' target='_blank' alt=''>Buyer Confused:</a>
      </div>

      <div class="overflow-x-auto mt-5">
        <p className='mb-2'>
          <b className="text-xl">Educational Background :</b>
        </p>
        <p className="font-semibold mb-2">
          Complete Web Development Course With Jhankar Mahbub
        </p>
        <table class="table w-full">
          <thead>
            <tr>
              <th>Examination</th>
              <th>
                University <br /> or School
              </th>
              <th>Board</th>
              <th>Point</th>
              <th>
                Session <br /> or Year
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>B.A(History)</th>
              <td>Govt. Titumir College</td>
              <td>7 college affiliated</td>
              <td>Running 2nd Year</td>
              <td>2019-20</td>
            </tr>
            <tr class="active">
              <th>H.S.C</th>
              <td>Tongi Govt. college</td>
              <td>Dhaka</td>
              <td>3.33</td>
              <td>2019</td>
            </tr>
            <tr>
              <th>S.S.C</th>
              <td>Haydarabad R.K.P High School</td>
              <td>Dhaka</td>
              <td>4.45</td>
              <td>2017</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default MyPortFolio;
