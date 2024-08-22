import React from "react";
import MovieCard from "../Cards/MovieCard";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/system";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
}));

const ResponsiveBox = ({ dataList }) => {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1,
        paddingRight: 1,
        margin: 0,
        listStyle: "none",
        overflowX: "auto", // Enables horizontal scrolling
        overflowY: "hidden",
        width: "100%", // Full width to ensure responsiveness
        maxWidth: "100vw", // Prevents overflow beyond viewport width
      }}
    >
      {dataList &&
        dataList.map((item) => (
          <ListItem
            key={item.id}
            sx={{
              width: {
                xs: "120px", // For small screens
                sm: "140px", // For medium screens
                md: "160px", // For larger screens
              },
              height: "auto",
              padding: 0,
              margin: 0,
              flexShrink: 0, // Prevents shrinking of list items
            }}
          >
            <StyledLink
              to={`/${item.title ? "movie" : "tv"}/${item.id}/${
                item.title ? item.title : item.name
              }`}
            >
              <MovieCard
                id={item.id}
                title={item.title ? item.title : item.name}
                voteAverage={item.vote_average}
                posterPath={item.poster_path}
                releaseDate={item.release_date}
              />
            </StyledLink>
          </ListItem>
        ))}
    </Box>
  );
};

export default ResponsiveBox;
