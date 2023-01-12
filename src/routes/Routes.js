import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../page/Home/Home";
import Appartement from '../page/Appartement/Appartement';
import Propos from "../page/Propos/Propos";
import Erreur404 from "../page/404/Erreur404";


function RoutesPath() {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/logement/:id" element={<Appartement />}/>
            <Route path="/a-propos" element={<Propos />}/>
            <Route path="*" element={<Erreur404 />}/>
        </Routes>
    );
}

export default RoutesPath;
