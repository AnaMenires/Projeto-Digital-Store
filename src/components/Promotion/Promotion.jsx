import React from "react";
import ButtonSale from "../ButtonSale/ButtonSale";

const Promotion = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto mt-12 w-full gap-10 px-6">
      
      
      <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-b from-[#a78eff] via-[#d6ceff] to-white flex justify-center items-center">
        <img
          src="/imgs/air_jordan.png"
          alt="Air Jordan"
          className="max-w-[75%] max-h-[75%] object-contain cursor-pointer"
        />
      </div>

     
      <div className="flex flex-col w-full lg:w-[45%] gap-4 mt-8 lg:mt-10 text-center lg:text-left mb-20">
        <p className="font-semibold md:text-[#c92071] text-sm text-[#f6aa1c] text-left md:text-center">Oferta especial</p>
        <h2 className="text-3xl lg:text-5xl text-[#312e2e] text-left md:text-center">
          Air Jordan edição de colecionador
        </h2>
        <p className="text-sm text-gray-800 text-left md:text-center">
          A edição de colecionador da Air Jordan une história e exclusividade em um design icônico. Com materiais premium, detalhes numerados e tiragem limitada, esse modelo celebra a herança da marca e o legado de Michael Jordan.
        </p>
        <div className="flex justify-center">
          <ButtonSale title="Ver Oferta" />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
