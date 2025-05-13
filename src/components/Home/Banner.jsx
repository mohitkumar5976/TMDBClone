import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "../Search/Search";

const imageLinks = [
  {
    id: 0,
    url: "/assets/images/banner/cm1.jpg",
  },
  {
    id: 1,
    url: "/assets/images/banner/cm2.jpg",
  },
  {
    id: 2,
    url: "/assets/images/banner/cm3.jpg",
  },
  {
    id: 3,
    url: "/assets/images/banner/cm4.jpg",
  },
  {
    id: 4,
    url: "/assets/images/banner/cm5.jpg",
  },
  {
    id: 5,
    url: "/assets/images/banner/cm6.jpg",
  },
];

const Banner = () => {
  return (
    <Box
      sx={{
        height: { sm: "35rem", lg: "calc(100vh - 3.6rem)" },
        overflow: "hidden", // Ensures no extra space below the image
        position: "relative",
      }}
    >
      <Carousel
        fade
        controls={false}
        indicators={false}
        style={{ height: "100%" }}
      >
        {imageLinks.map((imageLink) => (
          <Carousel.Item key={imageLink.id} style={{ height: "100%" }}>
            <img
              src={imageLink.url}
              alt={`Slide ${imageLink.id + 1}`}
              style={{
                height: "100%",
                objectFit: "cover", // Ensures the image covers the entire area
                width: "100%", // Ensures the image covers the entire width
                backgroundPosition: "center",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Stack
        spacing={{ xs: 1, sm: 5 }}
        sx={{
          paddingLeft: { xs: 1, sm: 3 },
          paddingRight: { xs: 1, sm: 3 },
          width: "100%",
          position: "absolute",
          bottom: { xs: "1rem", sm: "4rem" },
          zIndex: 1,
        }}
      >
        <Stack direction={"column"}>
          <Typography
            color="white"
            fontSize={{ xs: 30, sm: 70 }}
            fontWeight={"bold"}
          >
            Welcome.
          </Typography>
          <Typography
            color="white"
            fontSize={{ xs: 13, sm: 23 }}
            fontWeight={"bold"}
          >
            Millions of movies, TV shows and people to discover. Explore now.
          </Typography>
        </Stack>
        <Search />
      </Stack>
    </Box>
  );
};

export default Banner;
