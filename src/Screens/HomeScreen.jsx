import "./HomeScreen.css";
import { Button, Divider,Loader } from "@mantine/core";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";
import FeatureSection from '../components/FeatureSection';
import TrendingProductCard from '../components/TrendingProductCard';
import {useQuery} from '@tanstack/react-query';
import {axiosInstance} from '../axiosInstance';
const FIGURE_STYLES_WOMEN = {
  aspectRatio: "8 / 5",
  "--bg": "hsl(330, 80%, calc(90% - (var(--hover) * 10%)))",
  "--accent": "hsl(280, 80%, 40%)",
  transition: "background 0.2s",
  background:
    "radial-gradient(circle at top left, var(--accent), transparent 75%), var(--bg)",
  margin: "0",
  position: "relative",
  overflow: "hidden",
  borderRadius: "1rem",
};
const FIGURE_STYLES_MEN = {
  aspectRatio: "8 / 5",
  "--bg": "hsl(330, 80%, calc(90% - (var(--hover) * 10%)))",
  "--accent": "hsl(180, 80%, 40%)",
  transition: "background 0.2s",
  background:
    "radial-gradient(circle at bottom left, #41B3A3, transparent 100%), var(--bg)",
  margin: "0",
  position: "relative",
  overflow: "hidden",
  borderRadius: "1rem",
};

function HomeScreen() {
  const {data: product,isLoading} = useQuery(['products'], () => axiosInstance.get('/products').then(res => res.data));

  return (
    <>
      <div className="home-container">
        <h1 className="shoe-name">JUST DO <br/> IT</h1>
        <div className="shoe-container">
          <img src="images/home-img.png" alt="Shoe" className="shoe-image" />
        </div>
        <div className="category-container">
          <Link to="/products/women" style={{ paddingBottom: "40px" }}>
            <CategoryCard
              title={"Women"}
              image={"images/category-women.png"}
              backgroundStyle={FIGURE_STYLES_WOMEN}
            />
          </Link>
          <Link to="/products/men">
            <CategoryCard
              title={"Men"}
              image={"images/category-men.png"}
              backgroundStyle={FIGURE_STYLES_MEN}
            />
          </Link>
        </div>

        <div className="description-container">
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id
            saepe temporibus alias ipsa ullam inventore aliquam optio, facilis
            modi placeat explicabo tempore laborum eius. Quia commodi unde natus
            expedita?
          </p>
          <Link to={"/products"} className='btn-allproducts' >
            <Button variant="gradient" > See all Products</Button>
          </Link>
        </div>
      </div>
      <Divider my="sm" />
      <div className="products-container">
        <h1 className="products-heading">Hot picks</h1>
        <div className="products">
          {isLoading && <Loader variant='bars'/>}
        {product?.filter((item)=> item.rating> 4.5
        ).map((item) => (
          <TrendingProductCard
            key={item._id}
            image={item.image}
            title={item.name}
            category={item.brand}
            id = {item._id}
          />
        ))}
        </div>

      </div>
      <Divider my="sm" />
    </>
  );
}

export default HomeScreen;
