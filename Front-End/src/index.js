import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Routes, Route } from 'react-router-dom'


import HomeRoute from './mainRoutes/HomeRoute';
import Appointment from './mainRoutes/AppointmentsRoute';
import Doctors from './mainRoutes/DoctorsRoute';
import Patients from './mainRoutes/PatientsRoute';
import Receptionists from './mainRoutes/ReceptionistsRoute';
import Admin from './mainRoutes/AdminRoute';
import Information from './mainRoutes/InformationRoute';
import Results from './mainRoutes/ResultsRoute';
import Roshita from './mainRoutes/RoshitaRoute';
import Sign from './mainRoutes/SignRoute';
import Profile from './mainRoutes/ProfileRoute';
import ErrRoute from './mainRoutes/ErrRoute'
import Search from './mainRoutes/SearchRoute'
import LogOut from './mainRoutes/LogOutRoute'
import Signin from './components/SignIn'
import SignUp from './components/SignUp'
import MainLayout from './layout/MainLayout';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <>
        <Routes>
          <Route path="/" element={<App />} >
          {/* <Route path="main" element={<MainLayout />} > */}
            {/* <Route path="/" element={<HomeRoute />} > */}
            <Route path='/appointments' element={<Appointment />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/receptionists" element={<Receptionists />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/info" element={<Information />} />
            <Route path="/results" element={<Results />} />
            <Route path="/roshita" element={<Roshita />} />
            {/* <Route path="/sign" element={<Sign />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/logout" element={<LogOut />} />
            {/* </Route> */}
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<ErrRoute />} />
        </Routes>
      </>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


