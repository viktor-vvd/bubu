import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CataloguePage from './components/CataloguePage/CataloguePage';
import ProductPage from './components/ProductPage/ProductPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" replace />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/home" element={<Home />} />
      <Route path="/catalogue" element={<CataloguePage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  )
}

export default AppRouter