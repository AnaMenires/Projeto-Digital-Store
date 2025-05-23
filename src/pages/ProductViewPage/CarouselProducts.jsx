import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

const CarouselProducts = () => {
  return (
    <div>
      <div className="flex justify-between bg-[#e2e3ff]  h-[380px] items-center">
        <div className="text-gray-600 pl-2">
          <ArrowLeftIcon size={32} />
        </div>

        <div>
          <img
            src="./imgs/produto1.png"
            alt="Tênis Air"
            className="w-max  items-center"
          />
        </div>

        <div className="text-gray-600 pr-2 ">
          
          <ArrowRightIcon size={32} />
        </div>
      </div>

      <div className="pt-4 flex gap-2 justify-between mx-auto">
        <div className="flex justify-between bg-[#e2e3ff] w-[90px]  h-[80px] items-center">
          <img
            src="./imgs/produto1.png"
            alt="Tênis Air"
            className="w-max  items-center"
          />
        </div>
        <div className="flex justify-between bg-[#ffe8bc] w-[90px]  h-[80px] items-center">
          <img
            src="./imgs/produto1.png"
            alt="Tênis Air"
            className="w-max  items-center"
          />
        </div>
        <div className="flex justify-between bg-[#ffc0bc] w-[90px]  h-[80px] items-center">
          <img
            src="./imgs/produto1.png"
            alt="Tênis Air"
            className="w-max  items-center"
          />
        </div>
        <div className="flex justify-between bg-[#dec699] w-[90px]  h-[80px] items-center">
          <img
            src="./imgs/produto1.png"
            alt="Tênis Air"
            className="w-max  items-center"
          />
        </div>
        <div className="flex justify-between bg-[#e8dfcf] w-[90px]  h-[80px] items-center">
          <img
            src="./imgs/produto1.png"
            alt="Tênis Air"
            className="w-max  items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselProducts;
