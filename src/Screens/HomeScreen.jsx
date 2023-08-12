import "./HomeScreen.css";
import LoginScreen from "./LoginScreen";

import { Divider } from "@mantine/core";
import CategoryCard from '../components/CategoryCard';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <>
      <div className="home-container">
        <h1 className="shoe-name">NIKE AIR FORCE</h1>
        <div className="shoe-container">
          <img
            src="images/home-img.png"
            alt="Shoe"
            className="shoe-image"
          />
          
        </div>
        <Link to="/products" style={{gridArea:' 1/1/2/2'}}>
        <CategoryCard title={'Women'} image={'images/category-women.png'}/>
        </Link>
        
        
        <div className="description-container">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            aperiam molestiae ratione ut est nulla amet temporibus nam,
            voluptatem reiciendis optio
          </p>
        </div>
      </div>
      <Divider my="sm" sx={{margin:'0 100px'}}/>
    </>
  );
}

export default HomeScreen;
