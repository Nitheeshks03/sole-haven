import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import AllProductsScreen from "./Screens/AllProductsScreen";
import MainHeader from "./components/MainHeader";
import CartScreen from "./Screens/CartScreen";
import { useState } from "react";
function App() {
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
 
  return (
    <>
      <MainHeader
        handleLoginOpen={handleLoginOpen}
        handleRegisterOpen={handleRegisterOpen}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen
              handleLoginClose={handleLoginClose}
              isLoginOpen={isLoginOpen}
              handleRegisterClose={handleRegisterClose}
              isRegisterOpen={isRegisterOpen}
            />
          }
        />
        <Route path="/product" element={<ProductScreen />} />
        <Route path="/products" element={<AllProductsScreen />} />
        <Route path="/cart" element={<CartScreen/>} />
        
      </Routes>
    </>
  );
}

export default App;
