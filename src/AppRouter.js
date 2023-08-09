import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CataloguePage from './components/CataloguePage/CataloguePage';
import ProductPage from './components/ProductPage/ProductPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/bubu/home" replace />} />
      <Route path="/bubu/auth" element={<Auth />} />
      <Route path="/bubu/home" element={<Home />} />
      <Route path="/bubu/catalogue" element={<CataloguePage />} />
      <Route path="/bubu/product" element={<ProductPage />} />
    </Routes>
  )
}

export default AppRouter