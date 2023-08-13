import Carousels from "../components/Carousels";
import ProductCard from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@mantine/core";
import { axiosInstance } from "../axiosInstance";

function AllProductsScreen({ setCart,handleAddToCart }) {
  const {
    isLoading,
    isError,
    data: products,
  } = useQuery(["products"], () =>
    axiosInstance.get("/products").then((res) => res.data)
  );

  return (
    <>
      <Carousels />
      <div
        style={{
          margin: "0 100px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
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
            product={product}
            id={product._id}
            setCart={setCart}
          />
        ))}
      </div>
    </>
  );
}

export default AllProductsScreen;
