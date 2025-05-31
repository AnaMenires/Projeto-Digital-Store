import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './App.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';
import LayoutRoutes from "./LayoutRoutes/LayoutRoutes.jsx";





createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <LayoutRoutes />
    </BrowserRouter>
    
  </StrictMode>
);
