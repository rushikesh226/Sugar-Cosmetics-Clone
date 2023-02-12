import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/aman/Home";
import IndividualProductPage from "../Pages/aman/IndividualProductPage";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/individualPage" element={<IndividualProductPage />} />
        </Routes>
    );
}

export default AllRoutes;
