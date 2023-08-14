import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductScreen from "./screens/ProductScreen";
import AllProductsScreen from "./screens/AllProductsScreen";
import MainHeader from "./components/MainHeader";
import Steps from "./components/Steps";
import {  useState } from "react";
import Footer from "./components/Footer";
import LoginScreen from "./screens/LoginScreen";
import { CartProvider } from './contexts/CartContext';

const links = [{ label: "Home" }, { label: "About" }, { label: "Services" }];

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
    <CartProvider>
      <MainHeader
        handleLoginOpen={handleLoginOpen}
        handleRegisterOpen={handleRegisterOpen}
        isLoginOpen={isLoginOpen}
      />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products/:id" element={<ProductScreen />} />
        <Route path="/products" element={<AllProductsScreen />} />
        <Route path="/cart" element={<Steps/>} />
      </Routes>
      </CartProvider>
      {isLoginOpen && <LoginScreen handleLoginClose={handleLoginClose} />}
      {isRegisterOpen && (
        <RegisterScreen handleRegisterClose={handleRegisterClose} />
      )}
      <Footer links={links} />
    </>
  );
}

export default App;
