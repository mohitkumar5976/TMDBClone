import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MovieCard from "../Cards/MovieCard";

export default function SearchContainer({ search }) {
  return (
    <>
      <Box className="flex flex-col gap-4 pt-1">
        <Typography
          fontSize={20}
          className=" text-center bg-black text-white py-2"
        >
          Search Results ({search.length})
        </Typography>
        <Grid container columns={{ xs: 2, sm: 4 }}>
          {search.map((movie) => (
            <Grid item key={movie.id} xs={1} sm={1} className="p-1">
              <Link
                to={`/${movie.title ? "movie" : "tv"}/${movie.id}/${
                  movie.title ? movie.title : movie.name
                }`}
              >
                <MovieCard
                  id={movie.id}
                  title={movie.title ? movie.title : movie.name}
                  voteAverage={movie.vote_average}
                  posterPath={movie.poster_path}
                  releaseDate={movie.release_date}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
