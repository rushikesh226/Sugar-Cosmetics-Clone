import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/aman/Home";
import ProductListPage from "../Pages/Product/ProductListPage";
import IndividualProductPage from "../Pages/aman/IndividualProductPage";
import { PaymentPage } from "../Pages/aman/PaymentPage";
import NotFoundPage from "../Pages/Product/NotFoundPage";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/products" element={<ProductListPage />}></Route>
      <Route path="/" element={<Home />} />
      <Route path="/individualPage" element={<IndividualProductPage />} />
      <Route path="/payments" element={<PaymentPage />} />
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  );
}

export default AllRoutes;
