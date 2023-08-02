import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}

export default AppRouter