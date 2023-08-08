
import { Carousel } from "@mantine/carousel";

const images = [
  "src/assets/carousel-1.jpg",
  "src/assets/carousel-2.jpg",
  "src/assets/carousel-3.jpg",
];

export default function Carousels() {
  const slides = images.map((image) => (
    <Carousel.Slide key={image} style={{background:`url(${image}) repeat-x center/cover`, width:'100%'}}>
      <img src={image} alt="slide" />
    </Carousel.Slide>
  ));

  return (

    <Carousel
      style={{ maxWidth: "100%", margin: "0 100px"}}
      mx="auto"
      withIndicators
      height={400}
      interval={3000} // Set the interval to control slide transition duration
    >
      {slides}
    </Carousel>
  );
}
