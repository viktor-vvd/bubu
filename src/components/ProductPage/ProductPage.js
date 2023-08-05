import React from 'react'
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
    const { state } = useLocation();
  const { item } = state;
    console.log(item);
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage