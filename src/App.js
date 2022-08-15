import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import Purchase from './Pages/Home/Purchase';
import RequireAuth from './Shared/RequireAuth';
import Payment from './Pages/Dashboard/Payment';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Shared/RequireAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import MyProfileEdit from './Pages/Dashboard/MyProfileEdit';
import NotFound from './Pages/Dashboard/NotFound';
import ManageTools from './Pages/Dashboard/ManageTools';
import Blogs from './Pages/Blogs.js/Blogs';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  
  return (
    <div className="max-w-7xl mx-auto">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase />
        </RequireAuth>} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<MyProfile />} />
          <Route path='myProfileEdit' element={<MyProfileEdit />} />
          <Route path=':myOrders' element={<MyOrders />} />
          <Route path='addReview' element={<AddReview />} />
        <Route path='payment/:id' element={<Payment />} />
          <Route path='makeAdmin' element={<RequireAdmin>
            <MakeAdmin />
          </RequireAdmin>} />
          <Route path='manageOrders' element={<RequireAdmin>
            <ManageOrders />
          </RequireAdmin>} />
          <Route path='manageTools' element={<RequireAdmin>
            <ManageTools />
          </RequireAdmin>} />
          <Route path='addProduct' element={<RequireAdmin>
            <AddProduct />
          </RequireAdmin>} />
        </Route>

        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
