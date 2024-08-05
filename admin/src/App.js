import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddItems from './pages/AddItems';
import ListItems from './pages/ListItems';
import Order from './pages/Order';
import Profile from '../src/pages/Profile'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <div  className="mx-auto ">
      <ToastContainer/>
      <Navbar/>
      <hr className='w-full'/>
      <div className="flex">
        <Sidebar/>
        <Routes>
        
          <Route path='/add' element={<AddItems/>}/>
          <Route path='/list' element={<ListItems/>}/>
          <Route path='/orders' element={<Order/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </div>
        
    </div>
  );
}

export default App;
