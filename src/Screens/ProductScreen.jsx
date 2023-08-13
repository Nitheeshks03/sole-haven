import "./ProductScreen.css";
import { Divider } from "@mantine/core";
import SizeSelector from "../components/SizeSelector";
import { Button } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstance.js";
import { Loader } from "@mantine/core";
import { useState } from 'react';
import ErrorAlert from '../components/ErrorAlert';

function ProductScreen({handleAddToCart,existItem}) {
  const [size, setSize] = useState("6");
  const { id: productId } = useParams();

  const {
    isLoading,
    isError,
    data: product,
  } = useQuery(["product"], () =>
    axiosInstance.get(`/products/${productId}`).then((res) => res.data)
  );

  const handleAddItem=()=>{
    handleAddToCart(product, size, 1);
  }

 

  return (
    <div className="product-container">
      <div className="image-container">
        {product?.image.map((img, index) => (
          <img
            src={img}
            alt="product"
            key={index}
            className={`img-${index + 1}`}
          />
        ))}
      </div>
      <div className="product-info">
        {isError && <div>Something went wrong ...</div>}
        {isLoading && <Loader />}
        {existItem && <ErrorAlert message="Item already exist in cart"/>}
        <h1>{product?.name}</h1>
        <Divider />
        <p>{product?.description}</p>
        <Divider />
        <h2 className="price">{product?.price}</h2>
        <h3>SELECT SIZE</h3>
        <SizeSelector setSize={setSize} size={size}/>
        <div className="buttons">
          <Button
            variant="filled"
            color="dark"
            size="md"
            onClick={handleAddItem}
            disabled={existItem}
          >
            Add To Cart
          </Button>
          <Button variant="outline" color="dark" size="md">
            Add To Wishlist
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
