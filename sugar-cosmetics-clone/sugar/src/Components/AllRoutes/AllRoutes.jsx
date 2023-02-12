import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartPage } from "../../aman/CartPage";
import { Home } from "../../aman/Home";
import IndividualProductPage from "../../aman/IndividualProductPage";
// import {Home} from "../Home.jsx"

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/individualPage" element={<IndividualProductPage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    );
}

export default AllRoutes;
