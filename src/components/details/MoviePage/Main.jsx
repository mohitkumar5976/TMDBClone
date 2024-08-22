import { Box, Grid } from "@mui/material";
import React from "react";
import MovieCard from "../../Cards/MovieCard";
import { Link } from "react-router-dom";

function Main({ dataList }) {
  return (
    <>
      <Box>
        <Grid container columns={{ xs: 2, sm: 3 }}>
          {dataList.map((movie) => (
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

export default Main;
