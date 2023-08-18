import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstance.js";
import ProductCard from "../components/ProductCard.jsx";
import Carousels from '../components/Carousels';


function WomenProductScreen() {

  const {
   isLoading,
    isError,
    data: products,
  } = useQuery(["products-men"], () =>
    axiosInstance.get("/products").then((res) => res.data)
  );

  return (
    <>
    <Carousels/>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "20px",
        // paddingLeft: "50px",
      }}
    >
      {products?.map((product, index) =>
        product.category == "Women" ? (
          <ProductCard
            key={index}
            product={product}
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
