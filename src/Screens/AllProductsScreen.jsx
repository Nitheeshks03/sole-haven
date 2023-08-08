import Carousels from "../components/Carousels";
import ProductCard from "../components/ProductCard";

function AllProductsScreen() {
  return (
    <>
    <Carousels />
    <div style={{ margin: "0 100px",display:'flex',justifyContent:'space-between' }}>
      
      <ProductCard
        image="src/assets/product-1.jpg"
        title={"Converse Defcon"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        }
        rating={'⭐4.5'}
        price={"$49"}
      />
      <ProductCard
        image="src/assets/product-2.jpg"
        title={"Converse Defcon"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        }
        rating={'⭐4.5'}
        price={"$49"}
      />
      <ProductCard
        image="src/assets/product-2.jpg"
        title={"Converse Defcon"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        }
        rating={'⭐4.5'}
        price={"$49"}
      />
      <ProductCard
        image="src/assets/product-2.jpg"
        title={"Converse Defcon"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        }
        rating={'⭐4.5'}
        price={"$49"}
      />
    
    </div>
    </>
  );
}

export default AllProductsScreen;
