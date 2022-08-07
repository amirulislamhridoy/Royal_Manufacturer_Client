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

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase />
        </RequireAuth>} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<MyProfile />} />
          <Route path=':myOrders' element={<MyOrders />} />
          <Route path='addReview' element={<AddReview />} />
          <Route path='makeAdmin' element={<MakeAdmin />} />
        </Route>
        <Route path='/payment/:id' element={<Payment />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
