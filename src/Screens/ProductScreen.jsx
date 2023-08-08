import "./ProductScreen.css";
import { Divider } from "@mantine/core";
import SizeSelector from "../components/SizeSelector";
import { Button } from "@mantine/core";

function ProductScreen() {
  return (
    <div className="product-container">
      <div className="image-container">
        <img
          className="product p1 "
          src="src\assets\product-1.jpg"
          alt="product"
        />
        <img
          className="product p2 "
          src="src\assets\product-1.jpg"
          alt="product"
        />
        <img
          className="product p3 "
          src="src\assets\product-1.jpg"
          alt="product"
        />
        <img
          className="product p4 "
          src="src\assets\product-1.jpg"
          alt="product"
        />
        <img
          className="product p5 "
          src="src\assets\product-1.jpg"
          alt="product"
        />
      </div>
      <div className="product-info">
        <h1>Product Name</h1>
        <Divider />
        <p>Product Description</p>
        <Divider />
        <h2 className="price">$49</h2>
        <h3>SELECT SIZE</h3>
        <SizeSelector />
        <div className="buttons">
          <Button variant="filled" color="dark" size="md">
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
