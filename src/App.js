import React from 'react';
import Forget from "./Page/Forgetpassword";
import Signup from "./Page/Signup";
import './App.css';
import SignIn from './Page/Sginin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Ourservice from './Component/Ourservice/Ourservice';
import Healthsupport from './Component/Healthsupport/Healthsupport';
import MedicationManagement from './Component/Medicationmangement/MedicationManagement';
import DietaryAssistance from './Component/DietaryAssistance/Dietaryassistance';
import PhysicalTherapy from './Component/PhysicalTherapy/Physicaltherapy';
import Companionship from './Component/Companionship/Companionship';
import RespiteCare from './Component/RespiteCare/RespiteCare';
import ProtectedRoute from './ProtectedRoute';
import Monitoring from './Component/Monitoring/Monitoring';
import { Notfind } from './Page/Notfind';
import AboutUs from './Page/Aboutus';
import Contactus from './Page/Contactus';



function App() {


  return (
    <>

      <BrowserRouter basename="/Kratin-Assignment">



        <Routes>
          <Route path='/'>
            <Route element={<ProtectedRoute />} >
              <Route path='/home' element={<Home />} />
              <Route path='/ourservices' element={<Ourservice />} />
              <Route path='/healthsupport' element={<Healthsupport />} />
              <Route path='/medicationmanagement' element={<MedicationManagement />} />
              <Route path='/dietaryassistance' element={<DietaryAssistance />} />
              <Route path='/physicaltherapy' element={<PhysicalTherapy />} />
              <Route path='/companionship' element={<Companionship />} />
              <Route path='/respitecare' element={<RespiteCare />} />
              <Route path='/monitoring' element={<Monitoring/>} />
              <Route path='/aboutus' element={<AboutUs/>} />
              <Route path='/contactus' element={<Contactus/>} />
              <Route path='/notfind' element={<Notfind/>} />
             
             
            </Route>
            <Route path='/' element={<SignIn />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forget' element={<Forget />} />
            <Route path='/*' element={<Notfind/>} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
