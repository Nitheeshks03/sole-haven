import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstance.js";
import ProductCard from "../components/ProductCard.jsx";
import { useContext } from "react";
import { WishListContext } from "../contexts/WishListContext.jsx";
import Carousels from '../components/Carousels';


function WomenProductScreen() {
  const { wishList, setWishList } = useContext(WishListContext);
  const {
    isSuccess,
    error,
    data: products,
  } = useQuery(["products-men"], () =>
    axiosInstance.get("/products").then((res) => res.data)
  );
  isSuccess && console.log(products);

  const handleWishList = (product) => {
    setWishList([...wishList, product]);
  };

  return (
    <>
    <Carousels/>
    <div
      style={{
        margin: "0 100px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "20px",
        paddingLeft: "50px",
      }}
    >
      {products?.map((product, index) =>
        product.category == "Women" ? (
          <ProductCard
            key={index}
            product={product}
            handleWishList={handleWishList}
            price={product.price}
            image={product.image[0]}
            title={product.title}
            description={product.description}
            id={product._id}
          />
        ) : null
      )}
    </div>
    </>
  );
}
export default WomenProductScreen;
