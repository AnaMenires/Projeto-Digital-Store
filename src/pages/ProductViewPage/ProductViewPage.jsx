import React, { useState } from "react";
import IconsStar from "../../components/IconsStar/IconsStar";
import IconStarSimple from "../../components/IconsStar/IconStarSimple";
import ButtonSale from "../../components/ButtonSale/ButtonSale";
import CarouselProducts from "./CarouselProducts";
import ProdutosRelacionados from "../../components/ProductListing/ProdutosRelacionados";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductViewPage = () => {
  const [selectedSize, setSelectedSize] = useState(41);
  const [selectedColorIndex, setSelectedColorIndex] = useState(1);

  const sizes = [39, 40, 41, 42, 43];
  const colors = ["#5EE7FF", "#FF6B6B", "#555", "#6C63FF"];

  return (
    <div className="flex flex-col px-4 py-4 bg-gray-100 md:pl-15">
      <div className="w-full mb-4">
        <h3 className="text-xs">
          <strong>Home</strong> / Produtos / Tênis / Nike / Tênis Nike
          Revolution 6 Next Nature Masculino
        </h3>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 pt-3">
          <CarouselProducts />
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-lg font-semibold mb-2">
            Tênis Nike Revolution <br className="hidden md:block" /> 6 Next Nature Masculino
          </h2>
          <h3 className="text-xs text-gray-600">
            Casual / Nike / REF:38416711
          </h3>

          <div className="flex flex-wrap md:flex-nowrap justify-start items-center pt-2 pb-2 gap-1">
            <div className="flex">
              <IconsStar className="text-[#f6aa1c]" />
              <IconsStar className="text-[#f6aa1c]" />
              <IconsStar className="text-[#f6aa1c]" />
              <IconsStar className="text-[#f6aa1c]" />
              <IconStarSimple className="text-[#f6aa1c]" />
            </div>
            <div className="bg-[#f6aa1c] w-[70px] h-[25px] rounded-sm flex items-center justify-center gap-1">
              <h3 className="text-white text-sm">4.7</h3>
              <IconsStar className="text-white size-4" />
            </div>
            <p className="text-xs text-gray-400">(90 avaliações)</p>
          </div>

          <div className="flex items-baseline gap-2">
            <h2 className="text-xl font-bold">
              <span className="text-sm pr-1">R$</span>
              219,00
            </h2>
            <span className="text-gray-400 line-through text-sm">219,00</span>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-600 pt-3 pb-2">
              Descrição do produto
            </h2>
            <p className="text-xs text-gray-700 md:text-base w-full md:w-[80%]">
              O Tênis Nike Revolution 6 Next Nature Masculino combina conforto e
              estilo para o dia a dia. Fabricado com materiais sustentáveis,
              oferece excelente amortecimento e respirabilidade.
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              Tamanho
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 rounded border flex items-center justify-center text-sm font-semibold ${
                    selectedSize === size
                      ? "bg-pink-600 text-white border-pink-600"
                      : "bg-white text-gray-800 border-gray-300"
                  }`}>
                  {size}
                </button>
              ))}
            </div>

            <h3 className="text-sm font-semibold text-gray-600 mb-2">Cor</h3>
            <div className="flex flex-wrap gap-4">
              {colors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColorIndex(index)}
                  className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                    selectedColorIndex === index
                      ? "border-white ring-2 ring-pink-600"
                      : "border-white"
                  }`}
                  style={{ backgroundColor: color }}></div>
              ))}
            </div>
            <div>
              <ButtonSale
                title="Comprar"
                className="bg-[#ffb31f] font-semibold mt-5 w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between max-w-6xl mx-auto mt-9 px-2">
        <ProdutosRelacionados />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex gap-3 mt-5 w-full">
          <ProductCard title="30% OFF" />
          <ProductCard title="30% OFF" />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductViewPage;
