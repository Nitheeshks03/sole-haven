import Carousels from "../components/Carousels";
import ProductCard from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@mantine/core";
import { axiosInstance } from "../axiosInstance";
import { useContext } from 'react';
import { WishListContext } from '../contexts/WishListContext';

function AllProductsScreen() {
  const { wishList, setWishList } = useContext(WishListContext);
  const {
    isLoading,
    isError,
    data: products,
  } = useQuery(["products"], () =>
    axiosInstance.get("/products").then((res) => res.data)
  );
  const handleWishList = (product) => {
    setWishList([...wishList, product]);
  };


  return (
    <>
      <Carousels />
      <div
        style={{
          margin: "0 100px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "20px",
          paddingLeft:'50px'

        }}
      >
        {isError && <div>Something went wrong ...</div>}
        {isLoading && (
          <Loader
            size="xl"
            sx={{ position: "absolute", top: "70%", left: "50%" }}
          />
        )}
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            title={product.name}
            description={product.description}
            price={product.price}
            image={product.image[0]}
            rating={product.rating}
            id={product._id}
            product={product}
            handleWishList={handleWishList}
          />
        ))}
      </div>
    </>
  );
}

export default AllProductsScreen;
