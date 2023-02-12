import React from 'react'
import {Route,Routes} from "react-router-dom";
import ProductListPage from "../Pages/Product/ProductListPage";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/products" element={<ProductListPage/>}></Route>
    </Routes>
  )
}

export default AllRoutes;