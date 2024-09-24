import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Layout/HomeLayout';
import Withdrew from './Layout/WithdrewLayout';
import SignIn from './Auth/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Network from './Layout/NetworkLayout';
import Navbar from './Components/Navbar';
import SettingLayout from './Layout/SettingLayout';
import SupportLayout from './Layout/SupportLayout';

const App = ()=> {
  const location = useLocation();

  const isSignInPage = location.pathname === '/';

  return (
    <div>
      {!isSignInPage && <Navbar />}
        <Routes>
          <Route path='/' exact element={<SignIn />} />
          <Route path='/home' element={<Home />} />
          <Route path='/withdrew' element={<Withdrew />} />
          <Route path='/network' element={<Network />} />
          <Route path='/setting' element={<SettingLayout />} />
          <Route path='support' element={<SupportLayout />} /> 
        </Routes>
    </div>
  );
}

export default App;
