import React from "react";
import MovieCard from "../Cards/MovieCard";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
}));

const CarouselSection = ({ dataList }) => {
  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        gap: 1, paddingX: 1,
        width: "100%",
        maxWidth: "calc(100vw - 10px)",
        boxSizing: "border-box",
        scrollbarWidth: "thin", // Firefox
        "&::-webkit-scrollbar": {
          height: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ccc",
          borderRadius: "4px",
        },
      }}
    >
      {dataList?.map((item) => (
        <Box
          key={item.id}
          sx={{
            flexShrink: 0,
            width: {
              xs: "120px",
              sm: "140px",
              md: "160px",
            }
          }}
        >
          <StyledLink
            to={`/${item.title ? "movie" : "tv"}/${item.id}/${
              item.title || item.name
            }`}
          >
            <MovieCard
              id={item.id}
              title={item.title || item.name}
              voteAverage={item.vote_average}
              posterPath={item.poster_path}
              releaseDate={item.release_date}
            />
          </StyledLink>
        </Box>
      ))}
    </Box>
  );
};

export default CarouselSection;
