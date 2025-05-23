import { Link } from "react-router-dom";

const ProductCard = ({ className, title, containerClass, imageClass, textClass, h2Class, priceClass  }) => {
  return (
    <div className="relative w-full bg-white p-4 rounded-lg shadow">
       <Link to="/produto" >
      
       
      {title && (
        <span className="absolute top-3 left-2 bg-[#e7ff86] rounded-lg w-[80px] h-[32px] flex items-center justify-center text-xs font-medium">
          {title}
        </span>
      )}

      <div className={`w-full max-w-[280px] aspect-square flex items-center justify-center mx-auto flex-col ${className} ${containerClass}`}>
        <img
          src="/imgs/produtos_em_alta.png"
          alt="Produto Tênis em Alta"
          className={`rotate-320 max-w-[60%] max-h-[60%] transition-transform duration-300 ease-in-out transform hover:scale-105 object-contain mx-auto cursor-pointer ${imageClass}`}
        />
      </div>

      <div className="w-full max-w-[300px] mx-auto flex flex-col gap-1 mt-4 mb-5">
        <p className={`text-gray-500 text-xs ${textClass}`}>Tênis</p>
        <h2 className={`text-gray-800 ${h2Class}`} >K-Swiss V8 - Masculino</h2>
        <div className="gap-2">
          <span className={`text-sm text-gray-400 line-through ${priceClass}`}>$200</span>
          <span className={`text-base font-bold pl-3 ${priceClass} `}>$ 100</span>
        </div>
      </div>
       </Link>
    </div>
  );
};

export default ProductCard;