import React from "react";
import { Galleria } from "primereact/galleria";
import nike_air from "/imgs/nike_air.png";
import air_jordan from "/imgs/air_jordan.png";
import produtos_em_alta from "/imgs/produtos_em_alta.png";
import './ProductGallery.css';

const ProductGallery = ({ activeIndex, setActiveIndex }) => {
  const images = [
    {
      itemImageSrc: nike_air,
      alt: "Nike Air",
      title: "Nike Air",
    },
    {
      itemImageSrc: air_jordan,
      alt: "Air Jordan",
      title: "Air Jordan",
    },
    {
      itemImageSrc: produtos_em_alta,
      alt: "Produtos em Alta",
      title: "Produtos em Alta",
    },
  ];

  const itemTemplate = (item) => (
    <img
      src={item.itemImageSrc}
      alt={item.alt}
      className="w-full h-[300px] md:h-[400px] object-contain
      transform transition-transform duration-500 rotate-340"
    />
  );

  return (
    <div className="w-full flex justify-center px-4 py-4">
      <div className="w-full max-w-[500px] flex justify-center items-center">
        <Galleria
          value={images}
          item={itemTemplate}
          showThumbnails={false}
          showItemNavigators={false}
          circular
          autoPlay
          transitionInterval={5000}
          showIndicators={false}
          showIndicatorsOnItem={false}
          containerClass="custom-galleria"
          activeIndex={activeIndex}
          onItemChange={(e) => setActiveIndex(e.index)}
        />
      </div>
    </div>
  );
};

export default ProductGallery;
