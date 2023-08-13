import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductScreen from "./screens/ProductScreen";
import AllProductsScreen from "./screens/AllProductsScreen";
import MainHeader from "./components/MainHeader";
import Steps from "./components/Steps";
import { useState} from "react";
import Footer from "./components/Footer";
import LoginScreen from "./screens/LoginScreen";

const links = [{ label: "Home" }, { label: "About" }, { label: "Services" }];

function App() {
  const [cart, setCart] = useState([]);
  const [existItem, setExistItem] = useState(false);

  console.log(cart);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  function handleLoginOpen() {
    setIsLoginOpen(true);
  }

  function handleLoginClose() {
    setIsLoginOpen(false);
  }
  function handleRegisterOpen() {
    setIsRegisterOpen(true);
  }
  function handleRegisterClose() {
    setIsRegisterOpen(false);
  }

  const handleAddToCart = (product, size, qty) => {
    const newItem = {
      product,
      qty,
      size,
    };
    if (cart.find((item) => item.product._id === product._id)) {
      setExistItem(true);
    } else {
      setCart((items) => [...items, newItem]);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <>
      <MainHeader
        handleLoginOpen={handleLoginOpen}
        handleRegisterOpen={handleRegisterOpen}
      />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/products/:id"
          element={
            <ProductScreen
              setCart={setCart}
              handleAddToCart={handleAddToCart}
              existItem={existItem}
            />
          }
        />
        <Route
          path="/products"
          element={
            <AllProductsScreen
              setCart={setCart}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/cart" element={<Steps cart={cart} links={links} />} />
      </Routes>
      {isLoginOpen && <LoginScreen handleLoginClose={handleLoginClose} />}
      {isRegisterOpen && (
        <RegisterScreen handleRegisterClose={handleRegisterClose} />
      )}
      <Footer links={links} />
    </>
  );
}

export default App;
