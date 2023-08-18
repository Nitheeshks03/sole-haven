import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstance.js";
import ProductCard from "../components/ProductCard.jsx";
import { useContext } from "react";
import { WishListContext } from "../contexts/WishListContext.jsx";
import Carousels from "../components/Carousels";
import { Loader } from "@mantine/core";

function MenProductScreen() {
  const { handleWishList } = useContext(WishListContext);
  const {
    isLoading,
    data: products,
  } = useQuery(["products-men"], () =>
    axiosInstance.get("/products").then((res) => res.data)
  );

  return (
    <>
      <Carousels />
      {isLoading && (
        <Loader
          variant='bars'
          size="xl"
          sx={{ position: "absolute", top: "50%", left: "50%", translate: "-50%" }}
        />
      )}
      <div
        style={{ 
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "100px",
        }}
      >
        {products?.map((product, index) =>
          product.category == "Men" ? (
            <ProductCard
              key={index}
              product={product}
              handleWishList={handleWishList}
              price={product.price}
              image={product.image[0]}
              title={product.name}
              description={product.description}
              id={product._id}
            />
          ) : null
        )}
      </div>
    </>
  );
}
export default MenProductScreen;
