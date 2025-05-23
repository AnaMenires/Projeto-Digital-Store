import React from "react";

import ProductCard from "../ProductCard/ProductCard";

const ProductListing = () => {
  return (
    <div className="px-4">
                                   
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-8 mt-8">
        <ProductCard title="30% OFF" />
        <ProductCard title="30% OFF" />
        <ProductCard />
        <ProductCard />
        <ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
      </div>
    </div>
  );
};

export default ProductListing;
