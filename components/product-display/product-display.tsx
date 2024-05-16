import React from "react";
import ProductCard from "./components/prod-card";

const ProductDisplay: React.FC = () => {
  return (
    <div className="grid grid-cols-2 place-items-center">
      <ProductCard />
    </div>
  );
};

export default ProductDisplay;
