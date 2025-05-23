import React from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";

const ProdutosRelacionados = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-8 mt-9 gap-2 sm:gap-0">
      <h2 className="text-base sm:text-lg font-bold text-[#474747] text-center sm:text-left">
        Produtos em alta
      </h2>
      <div className="flex items-center gap-1">
        <h2 className="text-sm sm:text-base text-[#c92071] cursor-pointer">Ver todos</h2>
        <ArrowRightIcon size={18} className="text-[#c92071] cursor-pointer" />
      </div>
    </div>
  );
};

export default ProdutosRelacionados;
