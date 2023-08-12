import "./ProductScreen.css";
import { Divider } from "@mantine/core";
import SizeSelector from "../components/SizeSelector";
import { Button } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstance.js";
import { Loader } from '@mantine/core';
import { useContext } from 'react';
import { cartDispatchContext } from '../contexts/cartContext';
import { CART_ADD_ITEM } from '../constants/cartConstants.js';
function ProductScreen() {
  const dispatch = useContext(cartDispatchContext);
  const { id: productId } = useParams();

  const {
    isLoading,
    isError,
    data: product,
  } = useQuery(["product"], () =>
    axiosInstance.get(`/products/${productId}`).then((res) => res.data)
  );

  return (
    <div className="product-container">
      <div className="image-container">
        {product?.image.map((img,index) => (
          <img src={img} alt="product" key={index} className={`img-${index + 1}`} />
        ))}
      </div>
      <div className="product-info">
        {isError && <div>Something went wrong ...</div>}
        {isLoading && (<Loader/>)}
        <h1>{product?.name}</h1>
        <Divider />
        <p>{product?.description}</p>
        <Divider />
        <h2 className="price">{product?.price}</h2>
        <h3>SELECT SIZE</h3>
        <SizeSelector />
        <div className="buttons">
          <Button variant="filled" color="dark" size="md" onClick={()=>dispatch({
            type: CART_ADD_ITEM,
            payload: product,
          })}>
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
