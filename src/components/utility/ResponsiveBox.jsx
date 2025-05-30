import React from "react";
import MovieCard from "../Cards/MovieCard";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
}));

const ResponsiveBox = ({ dataList }) => {
  return (
    <Box
      sx={{
        overflowX: "auto",
        overflowY: "hidden",
        width: "100%",
        maxWidth: "100%", // Prevent overflow
        paddingY: 1,
        boxSizing: "border-box",
        display: "flex",
        gap: 1,
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
            },
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

export default ResponsiveBox;
