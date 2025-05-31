import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ProductViewPage from "../pages/ProductViewPage/ProductViewPage.jsx";
import ProductListingPage from "../pages/ProductListingPage/ProductListingPage.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Login from "../pages/Login/Login.jsx";
import Cadastro from "../pages/Login/Cadastro.jsx";
import NotFoundPage from "../pages/NotFound/NotFoundPage.jsx";

const LayoutRoutes = () => {
  const location = useLocation();

  const rotasConhecidas = ["/", "/produtos", "/produto", "/login", "/cadastro"];
  const isNotFound = !rotasConhecidas.includes(location.pathname);

  const ocultarHeader = ["/login", "/cadastro"].includes(location.pathname) || isNotFound;

  return (
    <>
      {!ocultarHeader && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/produto" element={<ProductViewPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {!isNotFound && <Footer />}
    </>
  );
};

export default LayoutRoutes;
