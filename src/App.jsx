import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import AllProductsScreen from "./screens/AllProductsScreen";
import MainHeader from "./components/MainHeader";
import Steps from "./components/Steps";
import { useState } from "react";
import Footer from "./components/Footer";
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
        <Route path="/cart" element={<Steps links={links} />} />
      </Routes>
      <Footer links={links} />
    </>
  );
}

export default App;
