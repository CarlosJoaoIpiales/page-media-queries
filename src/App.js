import "./App.css"
import "./CasaA.css"
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "./Inicio";
import Anuncios from "./Anuncios";
import Contacto from "./Contacto";
import Nosotros from "./Nosotros";
import CasaA from "./CasaA";
import CasaB from "./CasaB";
import CasaC from "./CasaC";
import DepartamentoA from "./DepartamentoA";
import DepartamentoB from "./DepartamentoB";
import PenthouseA from "./PenthouseA";
import PenthouseB from "./PenthouseB";
import SuitA from "./SuitA";
import SuitB from "./SuitB";
import TerrenoA from "./TerrenoA";
import TerrenoB from "./TerrenoB";
import TerrenoC from "./TerrenoC";
import HaciendaA from "./HaciendaA";
import HaciendaB from "./HaciendaB";
import HaciendaC from "./HaciendaC";
import HaciendaD from "./HaciendaD";
import Login from "./Login";
import Agregar from "./Agregar";
import Editar from "./Editar";

// import Log from "./Log";
import AppL from "./AppL"


import { ScriptHTMLAttributes } from "react";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/anuncios" element={<Anuncios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/agregar" element={<Agregar/>} />
      <Route path="/editar" element={<Editar/>} />
      {/* <Route path="/log" element={<Log />} /> */}
      <Route path="/AppL" element={<AppL />} />
      <Route path="/login" element={<Login />} />
      <Route path="/casaa" element={<CasaA />} />
      <Route path="/casab" element={<CasaB />} />
      <Route path="/casac" element={<CasaC />} />
      <Route path="/departamentoa" element={<DepartamentoA />} />
      <Route path="/departamentob" element={<DepartamentoB />} />
      <Route path="/penthousea" element={<PenthouseA />} />
      <Route path="/penthouseb" element={<PenthouseB />} />
      <Route path="/suita" element={<SuitA />} />
      <Route path="/suitb" element={<SuitB />} />
      <Route path="/terrenoa" element={<TerrenoA />} />   
      <Route path="/terrenob" element={<TerrenoB />} />  
      <Route path="/terrenoc" element={<TerrenoC />} />   
      <Route path="/haciendaa" element={<HaciendaA />} />   
      <Route path="/haciendab" element={<HaciendaB />} />  
      <Route path="/haciendac" element={<HaciendaC />} />  
      <Route path="/haciendad" element={<HaciendaD />} />  
      </Routes>
    </BrowserRouter>
    
  );

}




export default App;