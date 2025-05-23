import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  ListBulletsIcon,
} from "@phosphor-icons/react";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/products?filter=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <header className="w-full flex items-center justify-between px-4 py-4 md:px-15 relative z-50 bg-white">
        <button
          className="md:hidden text-[#c92071]"
          onClick={() => setIsMenuOpen(true)}>
          <ListBulletsIcon size={28} />
        </button>

        <div className="flex items-center gap-2">
          <img
            src="/logo_digital_college.png"
            alt="Logo Digital College"
            className="w-[18px] h-[18px]"
          />
          <h2 className="font-semibold text-[16px] text-[#c92071] font-inter">
            Digital Store
          </h2>
        </div>

        <div className="hidden md:flex items-center justify-center gap-2 basis-[60%]">
          <div className="flex flex-grow items-center border border-gray-300 px-2 py-1 rounded">
            <input
              type="text"
              placeholder="Pesquisar Produto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full text-sm outline-none"
            />
            <MagnifyingGlassIcon
              size={20}
              onClick={handleSearch}
              className="text-gray-500 cursor-pointer hover:text-[#c92071]"
            />
          </div>

          <button className="text-gray-700 underline underline-offset-2 hover:text-[#c92071] transition-all cursor-pointer text-xs ml-3">
            Cadastre-se
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-[#c92071] text-white px-4 py-1 rounded text-sm cursor-pointer">
            Entrar
          </button>

          <MagnifyingGlassIcon
            size={17}
            className="md:hidden text-gray-400 hover:text-[#c92071] cursor-pointer"
          />
          <div className="relative">
            <ShoppingCartIcon
              size={20}
              className="text-gray-500 hover:text-[#c92071] cursor-pointer"
            />
            <span className="absolute -top-1 -right-1 bg-[#c92071] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center cursor-pointer">
              2
            </span>
          </div>
        </div>
      </header>

      <nav className="hidden md:block mt-2 px-15 pt-3 pb-5">
        <ul className="flex gap-4 text-xs">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#c92071] font-semibold border-b-2 border-[#c92071] transition-all duration-300 cursor-pointer"
                  : "text-black font-medium hover:text-[#c92071] hover:font-semibold hover:border-b-2 hover:border-[#c92071] transition-all duration-300 cursor-pointer"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/produtos"
              className={({ isActive }) =>
                isActive
                  ? "text-[#c92071] font-semibold border-b-2 border-[#c92071] transition-all duration-300 cursor-pointer"
                  : "text-black font-medium hover:text-[#c92071] hover:font-semibold hover:border-b-2 hover:border-[#c92071] transition-all duration-300 cursor-pointer"
              }
            >
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categorias"
              className={({ isActive }) =>
                isActive
                  ? "text-[#c92071] font-semibold border-b-2 border-[#c92071] transition-all duration-300 cursor-pointer"
                  : "text-black font-medium hover:text-[#c92071] hover:font-semibold hover:border-b-2 hover:border-[#c92071] transition-all duration-300 cursor-pointer"
              }
            >
              Categorias
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pedidos"
              className={({ isActive }) =>
                isActive
                  ? "text-[#c92071] font-semibold border-b-2 border-[#c92071] transition-all duration-300 cursor-pointer"
                  : "text-black font-medium hover:text-[#c92071] hover:font-semibold hover:border-b-2 hover:border-[#c92071] transition-all duration-300 cursor-pointer"
              }
            >
              Meus Pedidos
            </NavLink>
          </li>
        </ul>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
