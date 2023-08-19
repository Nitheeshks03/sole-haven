import { Carousel } from "@mantine/carousel";


const images = [
  "/images/carousel-1.png",
  "/images/carousel-2.jpg",
  "/images/carousel-3.jpg",
];

export default function Carousels() {
  const slides = images.map((image) => (
    <Carousel.Slide
      key={image}
      style={{
        background: `url(${image})` ,
      }}
    >
      <img src={image} alt="slide" style={{maxWidth:'100vw'}} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      mx="auto"
      height={400}

    >
      {slides}
    </Carousel>
  );
}
