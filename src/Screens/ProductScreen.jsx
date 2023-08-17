import "./ProductScreen.css";
import SizeSelector from "../components/SizeSelector";
import { Button, Loader, Divider } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstance.js";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { WishListContext } from "../contexts/WishListContext";
import { notifications } from "@mantine/notifications";

function ProductScreen() {
  const { handleAddToCart } = useContext(CartContext);
  const { handleAddToWishList} = useContext(WishListContext);
  const [size, setSize] = useState("6");
  const { id: productId } = useParams();

  const {
    isLoading,
    isError,
    data: product,
  } = useQuery(["product"], () =>
    axiosInstance.get(`/products/${productId}`).then((res) => res.data)
  );
  const handleAddItem = () => {
    
    handleAddToCart(product, size, 1);
  };
  isError &&
    notifications.showNotification({
      title: "Error",
      message: "Something went wrong",
      color: "red",
    });
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
        {isLoading && <Loader />}
        <h1>{product?.name}</h1>
        <Divider />
        <p>{product?.description}</p>
        <Divider />
        <h2 className="price">{product?.price}</h2>
        <h3>SELECT SIZE</h3>
        <SizeSelector setSize={setSize} size={size} />
        <div className="buttons">
          <Button
            variant="filled"
            color="dark"
            size="md"
            onClick={handleAddItem}
          >
            Add To Cart
          </Button>
          <Button
            variant="outline"
            color="dark"
            size="md"
            onClick={handleAddToWishList}
          >
            Add To Wishlist
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
