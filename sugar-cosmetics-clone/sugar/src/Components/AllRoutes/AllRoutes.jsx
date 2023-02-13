import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Log from '../Pages/LoginSignin/Login';
import Otp from '../Pages/LoginSignin/Otp';

function AllRoutes() {
  return (
    <Routes>
        <Route path="*" element={<Log />} />
        <Route path="/" element={<Log />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
  )
}

export default AllRoutes;