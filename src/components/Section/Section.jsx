import ButtonSale from "../ButtonSale/ButtonSale";
import ProductGallery from "../Gallery/ProductGallery";
import { useState } from "react";

const Section = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-auto min-h-[500px] bg-[#f5f5f5] flex flex-col items-center justify-center px-4">
      <div className="flex flex-col-reverse md:flex-row justify-center gap-8 md:gap-20 pt-10 pb-5 w-full max-w-6xl pl-6">
        <div className="w-full max-w-[400px] min-h-[300px] flex flex-col justify-center p-4 gap-2">
          <p className="text-[#f6aa1c] font-semibold text-sm">
            Melhores ofertas personalizadas
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">
            Queima de <br />
            estoque Nike 🔥
          </h1>
          <p className="text-gray-700 text-sm pt-2">
            Queima de estoque Nike: Descontos imperdíveis por tempo limitado. Corre antes que acabe!
          </p>
          <ButtonSale title="Ver Ofertas"
          className="md:w-full"   
                 />
        </div>

        <div className="w-full max-w-[700px] min-h-[300px] flex items-center justify-center">
          <ProductGallery activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
      </div>

      <div className="flex gap-2 mt-[-20px] mb-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === activeIndex ? "bg-pink-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
