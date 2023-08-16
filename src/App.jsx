import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MainHeader from "./components/MainHeader";
import Steps from "./components/Steps";
import { useState } from "react";
import Footer from "./components/Footer";
import LoginScreen from "./screens/LoginScreen";
import { CartProvider } from "./contexts/CartContext";
import AllProductScreenWrapper from "./screens/AllProductScreenWrapper";
import ProductScreenWrapper from "./screens/ProductScreenWrapper";
import WishListScreenWrapper from "./screens/WishListScreenWrapper";
import MenProductScreenWrapper from "./screens/MenProductScreenWrapper";
import WomenProductScreenWrapper from "./screens/WomenProductScreenWrapper";
import ProductListScreen from "./screens/admin/ProductListScreen";
import UsersListScreen from "./screens/admin/UsersListScreen";

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
          <Route path="/wishlist" element={<WishListScreenWrapper />} />
          <Route path="/products/:id" element={<ProductScreenWrapper />} />
          <Route path="/products" element={<AllProductScreenWrapper />} />
          <Route path="/products/men" element={<MenProductScreenWrapper />} />
          <Route path='/productslist' element={<ProductListScreen />} />
          <Route path='/userslist' element={<UsersListScreen />} />
          <Route
            path="/products/women"
            element={<WomenProductScreenWrapper />}
          />

          <Route path="/cart" element={<Steps />} />
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
