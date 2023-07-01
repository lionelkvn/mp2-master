import './App.css';
import React from 'react';
import "@fontsource/poppins";
import {Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import PurchasePage from './Pages/PurchasePage';
import PurchasePageBrochure from "./Pages/PurchasePageBrochure"


function Apps() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/purchasebrochure" element={<PurchasePageBrochure />} />
    

    </Routes>
  );
}

export default Apps;