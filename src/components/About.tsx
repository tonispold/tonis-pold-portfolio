import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img3 from "../assets/murdmaa_suusk.jpeg";
import img1 from "../assets/lopetamine.jpg";
import img4 from "../assets/maesuusk_1.jpeg";
import img2 from "../assets/portree.jpg";

import { useState } from "react";

const images = [img1, img2, img3, img4];

function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_current: number, next: number) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box id="about" textAlign="center" pt={15}>
      <Typography className="section-title" variant="h3">
        ABOUT
      </Typography>

      {/* About Text */}
      <Typography className="about-text" variant="h6" color="text.secondary">
        Hi! My name is Tõnis Põld and I am a bachelor of science in engineering
        at Tallinna Ülikool who is looking for job opportunities to kickstart my
        career. I am born and raised in Rakvere and for the past couple of years
        I've lived in Tallinn. I am a sports enthusiast who mainly plays
        football, tennis, disc golf, and in the winter I ski.
        <br />
        <br />
        My love for web development comes from the need to create something for
        other people to use. As of lately, I've graduated university and have
        independently started to learn more about web development, graphical
        design, and software programming. Now, I'd like to put my skills to real
        use.
      </Typography>
      {/* Image Carousel */}
      <Box id="slider-box" sx={{ maxWidth: 850, mx: "auto", my: 4 }}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <Box
              id="slider-img-box"
              key={index}
              sx={{
                transform: index === activeIndex ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.5s ease-in-out",
                height: "250px",
              }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                width="100%"
                height="100%"
                style={{
                  borderRadius: 10,
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default AboutSection;
