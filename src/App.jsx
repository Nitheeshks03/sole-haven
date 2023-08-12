import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductScreen from "./screens/ProductScreen";
import AllProductsScreen from "./screens/AllProductsScreen";
import MainHeader from "./components/MainHeader";
import Steps from "./components/Steps";
import { useState, useReducer } from "react";
import Footer from "./components/Footer";
import LoginScreen from "./screens/LoginScreen";
import { CartContext, cartDispatchContext } from "./contexts/cartContext";

import { CART_ADD_ITEM } from "./constants/cartConstants.js";
const links = [{ label: "Home" }, { label: "About" }, { label: "Services" }];
const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  shippingAddress: {},
  paymentMethod: "",
  size: "6",
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const existingCartItemIds = state.cartItems.map(item => item._id);

      if (existingCartItemIds.includes(action.payload._id)) {
        return state;
      }

      const updatedCartItems = [...state.cartItems, action.payload];

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case "SIZE":
      return {
        ...state,
        size: action.payload,
      };
    default:
      return state;
  }
}


function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log(state);

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
      <CartContext.Provider value={state}>
        <cartDispatchContext.Provider value={dispatch}>
          <MainHeader
            handleLoginOpen={handleLoginOpen}
            handleRegisterOpen={handleRegisterOpen}
          />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/products/:id" element={<ProductScreen />} />
            <Route path="/products" element={<AllProductsScreen />} />
            <Route path="/cart" element={<Steps links={links} />} />
          </Routes>
          {isLoginOpen && <LoginScreen handleLoginClose={handleLoginClose} />}
          {isRegisterOpen && (
            <RegisterScreen handleRegisterClose={handleRegisterClose} />
          )}
          <Footer links={links} />
        </cartDispatchContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
