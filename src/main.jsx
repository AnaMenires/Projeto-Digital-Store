import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage/HomePage.jsx";
import ProductViewPage from "./pages/ProductViewPage/ProductViewPage.jsx";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage.jsx";
import Header from "./components/Header/Header.jsx";
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';
import Footer from "./components/Footer/Footer.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/produtos' element={ <ProductListingPage /> } />
        <Route path='/produto' element={ <ProductViewPage /> } />
        <Route path='*' element={ <h1> Not Found </h1> } />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  </StrictMode>
);
