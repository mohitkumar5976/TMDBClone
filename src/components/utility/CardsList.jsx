import React from "react";
import MovieCard from "../Cards/MovieCard";
import { Link } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

export default function CardsList({ dataList }) {
  return (
    <ul className="flex items-center gap-x-1">
      {dataList && dataList.length !== 0 ? (
        dataList.map((item) => {
          return (
            <li key={item.id} className="w-40 h-auto" >
              <Link
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
              </Link>
            </li>
          );
        })
      ) : (
        <Box className="w-full flex justify-center items-center">
          <CircularProgress size={"lg"} />
        </Box>
      )}
    </ul>
  );
}
