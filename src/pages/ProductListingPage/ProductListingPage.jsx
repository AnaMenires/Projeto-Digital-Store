import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import FilterGroup from "../../components/FilterGroup/FilterGroup";
import { CaretDownIcon} from "@phosphor-icons/react";
import FilterGroupResponsive from "../../components/FilterGroup/FilterGroupResponsive";

const ProductListingPage = () => {
  
  return (
    <div>
      <div className="bg-[#efeef6] w-full h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between p-10 mx-5 md:mx-20 ">
          <div className="md:order-1 order-2 w-[70%] max-w-[300px] mx-auto md:mx-0 md:w-auto md:max-w-none text-center md:text-left justify-center">
            <strong className="flex items-center text-gray-800 text-[12px] md:text-[15px]">
              Resultados para “Tênis”
              <span className="block text-xs text-gray-700 font-normal text-[10px] md:text-[12px]">
                - 389 produtos
              </span>
            </strong>
          </div>

          <div className="md:order-2 order-1 mb-4 md:mb-0  w-[70%] max-w-[300px] flex justify-center items-center gap-1">
            <button className="flex items-center border border-gray-300 rounded-md px-4 py-2 justify-center hover:bg-gray-50">
              <strong className="mr-1 p-2 text-xs md:text-sm">Ordenar por:</strong>
              <span className="text-gray-700 text-[9px] md:text-xs ">mais relevantes</span>
              <CaretDownIcon
                size={16}
                weight="bold"
                className="ml-2 text-gray-500"
              />
            </button>
            <FilterGroupResponsive
            className="text-white flex items-center mx-auto justify-center"
             />

                    
           
          </div>
        </div>

        <div className="w-full h-[full] flex mx-auto ml-30">
          <aside className="bg-white w-[20%] px-10 pt-5 hidden md:block">
            <FilterGroup />
          </aside>

          <div className="w-[65%] flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 w-full max-w-7xl mx-auto mb-10">
              <ProductCard  title="30% OFF" />
              <ProductCard  title="30% OFF" />
              <ProductCard  />
              <ProductCard  />
              <ProductCard  />
              <ProductCard  />
              <ProductCard  />
              <ProductCard  />
              <ProductCard  />
              <ProductCard  />
              <ProductCard  />
              <ProductCard  />
              <ProductCard  />
              <ProductCard  />
              <ProductCard  />
              <ProductCard  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;
