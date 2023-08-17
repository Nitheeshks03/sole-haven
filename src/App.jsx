import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import MainHeader from "./components/MainHeader";
import Steps from "./components/Steps";
import Footer from "./components/Footer";
import { CartProvider } from "./contexts/CartContext";
import AllProductScreenWrapper from "./screens/AllProductScreenWrapper";
import ProductScreenWrapper from "./screens/ProductScreenWrapper";
import WishListScreenWrapper from "./screens/WishListScreenWrapper";
import MenProductScreenWrapper from "./screens/MenProductScreenWrapper";
import WomenProductScreenWrapper from "./screens/WomenProductScreenWrapper";
import ProductListScreen from "./screens/admin/ProductListScreen";
import UsersListScreen from "./screens/admin/UsersListScreen";
import CreateProductScreen from './screens/admin/CreateProductScreen';
import MainHeaderWrapper from './components/MainHeaderWrapper';


function App() {
 


  return (
    <>
      <CartProvider>
        <MainHeaderWrapper />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/wishlist" element={<WishListScreenWrapper />} />
          <Route path="/products/:id" element={<ProductScreenWrapper />} />
          <Route path="/products" element={<AllProductScreenWrapper />} />
          <Route path="/products/men" element={<MenProductScreenWrapper />} />
          <Route path='/admin/userslist' element={<UsersListScreen />} />
          <Route path='/admin/productslist' element={<ProductListScreen />} />
          <Route path='/admin/products/:id/edit' element={<CreateProductScreen />} />
          <Route
            path="/products/women"
            element={<WomenProductScreenWrapper />}
          />

          <Route path="/cart" element={<Steps />} />
        </Routes>
      </CartProvider>
      <Footer  />
    </>
  );
}

export default App;
