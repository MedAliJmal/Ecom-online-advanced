import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Entete from "./components/communComponents/Entete";
import AdminProductList from "./components/adminComponents/AdminProductList";
import AdminAddProduct from "./components/adminComponents/AdminAddProduct";
import { StaticProducts } from "./Data";
import ProductList from "./components/userComponents/ProductList";

function App() {
  //  USER STATES
  const [user, setUser] = useState({
    name: "Mohamed Ali Jmal",
    role: "User",
    imgUrl:
      "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
  });
  //  PRODUCT STATE

  const [products, setProducts] = useState(StaticProducts);

  const handleDelete = (clickedID) => {
    let cartVerif = cart.find((el) => el.id === clickedID);
    if (cartVerif) {
      setCart(cart.filter((el) => el.id !== clickedID));
    }
    setProducts(products.filter((el) => el.id !== clickedID));
  };
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };
  const handleEditProd = (editedProd) => {
    setProducts(
      products.map((el) => (el.id === editedProd.id ? editedProd : el))
    );
  };

  const handleLike = (likedProd) => {
    likedProd.likedbyMe
      ? setProducts(
          products.map((el) =>
            el.id === likedProd.id
              ? { ...el, likes: el.likes - 1, likedbyMe: false }
              : el
          )
        )
      : setProducts(
          products.map((el) =>
            el.id === likedProd.id
              ? { ...el, likes: el.likes + 1, likedbyMe: true }
              : el
          )
        );
  };
  // --------------------------------------------

  //  SHOPPING CART STATE

  const [cart, setCart] = useState([]);

  const handleAddCart = (product) => {
    let verification = cart.find((el) => el.id === product.id);
    if (verification) {
      setCart(
        cart.map((el) =>
          el.id === product.id
            ? {
                ...el,
                quantity: el.quantity + 1,
                finalPrice: (el.quantity + 1) * el.finPrice,
              }
            : el
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
          finalPrice: product.finPrice,
        },
      ]);
    }
  };
  const handleIncQunatity = (clickedId) => {
    setCart(
      cart.map((el) =>
        el.id === clickedId
          ? {
              ...el,
              quantity: el.quantity + 1,
              finalPrice: (el.quantity + 1) * el.finPrice,
            }
          : el
      )
    );
  };

  const handleDecQunatity = (clickedId) => {
    setCart(
      cart.map((el) =>
        el.id === clickedId
          ? {
              ...el,
              quantity: el.quantity - 1,
              finalPrice: (el.quantity - 1) * el.finPrice,
            }
          : el
      )
    );
  };

  const handleCartDel = (clickedId) => {
    setCart(cart.filter((el) => el.id !== clickedId));
  };
  // ------------------------------

  const handleRole = (selectedRole) => {
    setUser({ ...user, role: selectedRole });
  };

  // search state

  const [search, setSearch] = useState("");
  const handleSearch = (text) => setSearch(text);
  return (
    <div className="App">
      <Entete
        handleIncQunatity={handleIncQunatity}
        handleDecQunatity={handleDecQunatity}
        cart={cart}
        handleCartDel={handleCartDel}
        handleRole={handleRole}
        user={user}
        search={search}
        handleSearch={handleSearch}
      />
      {/* Admin Section */}
      {user.role === "Admin" ? (
        <div>
          <AdminProductList
            handleDelete={handleDelete}
            products={products}
            search={search}
            handleEditProd={handleEditProd}
          />
          <AdminAddProduct handleAddProduct={handleAddProduct} />
        </div>
      ) : user.role === "User" ? (
        <div>
          <ProductList
            handleAddCart={handleAddCart}
            products={products}
            search={search}
            handleLike={handleLike}
          />
        </div>
      ) : null}
    </div>
  );
}

export default App;
