import "./HomeScreen.css";
import LoginScreen from "./LoginScreen";
import Register from "./RegisterScreen";
import { Divider } from "@mantine/core";

function HomeScreen({
  handleLoginClose,
  isLoginOpen,
  handleRegisterClose,
  isRegisterOpen,
}) {
  return (
    <>
      <LoginScreen
        handleLoginClose={handleLoginClose}
        isLoginOpen={isLoginOpen}
      />
      <Register
        handleRegisterClose={handleRegisterClose}
        isRegisterOpen={isRegisterOpen}
      />
      <div className="home-container">
        <h1 className="shoe-name">NIKE AIR FORCE</h1>
        <div className="shoe-container">
          <img
            src="src\assets\home-img.png"
            alt="Shoe"
            className="shoe-image"
          />
          
        </div>
        

        <div className="description-container">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            aperiam molestiae ratione ut est nulla amet temporibus nam,
            voluptatem reiciendis optio
          </p>
        </div>
      </div>
      <Divider my="sm" />
    </>
  );
}

export default HomeScreen;
