import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, handleAddCart, search, handleLike }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {products
        .filter((el) =>
          el.name.toUpperCase().includes(search.trim().toUpperCase())
        )
        .map((el) => (
          <ProductCard
            handleAddCart={handleAddCart}
            key={el.id}
            el={el}
            handleLike={handleLike}
          />
        ))}
    </div>
  );
};

export default ProductList;
