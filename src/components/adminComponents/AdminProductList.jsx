import React from "react";
import AdminProductCard from "./AdminProductCard";

const AdminProductList = ({
  products,
  search,
  handleDelete,
  handleEditProd,
}) => {
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
          <AdminProductCard
            key={el.id}
            el={el}
            handleDelete={handleDelete}
            handleEditProd={handleEditProd}
          />
        ))}
    </div>
  );
};

export default AdminProductList;
