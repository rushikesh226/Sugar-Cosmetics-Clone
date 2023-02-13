import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/aman/Home";
import ProductListPage from "../Pages/Product/ProductListPage";
import IndividualProductPage from "../Pages/aman/IndividualProductPage";
import CartSugar from "../Pages/shubham/CartSugar";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/products" element={<ProductListPage />}></Route>
      <Route path="/" element={<Home />} />
      <Route path="/individualPage" element={<IndividualProductPage />} />
      <Route path="/cartSugar" element={<CartSugar />} />
    </Routes>
  );
}

export default AllRoutes;
