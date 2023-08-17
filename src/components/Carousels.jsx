import { Carousel } from "@mantine/carousel";


const images = [
  "/images/carousel-1.jpg",
  "/images/carousel-2.jpg",
  "/images/carousel-3.jpg",
];

export default function Carousels() {
  const slides = images.map((image) => (
    <Carousel.Slide
      key={image}
      style={{
        background: `url(${image}) repeat-x center/cover`,
        width: "100%",
      }}
    >
      <img src={image} alt="slide" />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      style={{ maxWidth: "100%", margin: "0 100px" }}
      mx="auto"
      height={400}
    >
      {slides}
    </Carousel>
  );
}
