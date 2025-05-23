import React from "react";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-[250px] bg-white z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 shadow-md flex flex-col justify-between`}
      >
        
        <div className="p-4 mt-5">
          <h3 className="text-gray-800 font-semibold text-sm mb-4">Páginas</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="text-[#c92071] font-semibold underline underline-offset-2 cursor-pointer">
              Home
            </li>
            <li className="hover:text-[#c92071] cursor-pointer">Produtos</li>
            <li className="hover:text-[#c92071] cursor-pointer">Categorias</li>
            <li className="hover:text-[#c92071] cursor-pointer">Meus Pedidos</li>
          </ul>
        </div>

        
        <div className="p-4">
          <button className="w-full bg-[#c92071] text-white px-4 py-2 rounded text-sm cursor-pointer mb-4">
            Entrar
          </button>
          <p className="text-center text-xs underline cursor-pointer text-gray-700 hover:text-[#c92071]">
            Cadastre-se
          </p>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;
