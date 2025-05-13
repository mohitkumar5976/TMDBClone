import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieInfoBody from "./MovieInfoBody";
import MovieInfoSidebar from "./MovieInfoSidebar";
import ImageComponent from "../../utility/ImageComponent";
import TrendingCarousel from "../../Carousel/TrendingCarousel/TrendingCarousel";
import FreeToWatch from "../../Carousel/FreeToWatch/FreeToWatch";
import { getMovieDetails } from "../../../api/tmdb/movies";

function MovieInfo() {
  const { id, type } = useParams();
  const [data, setData] = useState([]);

  const getMovie = async () => {
    getMovieDetails(type, id)
      .then((res) => {
        // console.log(res.data);
        setData([res.data]);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <>
      <Grid
        container
        direction="column"
        sx={{
          minHeight: "100vh",
        }}
      >
        {data.length > 0 && (
          <Grid
            item
            className="bg-gray-700 flex items-center p-2"
            sx={{ height: { xs: "auto", sm: "40rem" } }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              width="100%"
            >
              <Box className="flex justify-center w-full">
                <Box paddingY={1} sx={{ width: { xs: "20rem", sm: "24rem" } }}>
                  <ImageComponent
                    rounded="rounded-3xl"
                    posterPath={data[0].poster_path}
                  />
                </Box>
              </Box>

              <Box className="w-full flex flex-col justify-center text-white gap-6">
                <Box className="flex flex-col gap-2">
                  <Typography variant="h4" fontWeight="bold">
                    {data[0].title}
                    <span className="text-gray-200"> (2013)</span>
                  </Typography>

                  <Box className="flex gap-2 flex-wrap">
                    {data[0].genres.map((genre) => (
                      <Typography key={genre.id}>{genre.name}</Typography>
                    ))}
                  </Box>
                </Box>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  flexWrap="wrap"
                >
                  <Box className="flex flex-wrap items-start gap-1">
                    <Box className="flex w-16 h-16 relative bg-black rounded-full">
                      <CircularProgress
                        variant="determinate"
                        value={Math.floor(data[0].vote_average * 10)}
                        color="success"
                        size="4rem"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          translate: "-50% -50%",
                        }}
                      />
                      <Typography
                        sx={{
                          color: "white",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          translate: "-50% -50%",
                          padding: "5px",
                        }}
                      >
                        {Math.floor(data[0].vote_average * 10)}%
                      </Typography>
                    </Box>
                    <span className="hidden sm:block">User Score</span>
                  </Box>

                  {[
                    ["Add to List", <FormatListBulletedIcon />],
                    ["Mark as Favorite", <FavoriteIcon />],
                    ["Add to your watchlist", <BookmarkIcon />],
                    ["Rate it!", <StarBorderIcon />],
                  ].map(([title, icon], idx) => (
                    <Tooltip key={idx} title={title} sx={{ cursor: "pointer" }}>
                      <Box
                        className="rounded-full p-4 flex"
                        sx={{ backgroundColor: "#032541" }}
                      >
                        {icon}
                      </Box>
                    </Tooltip>
                  ))}

                  <Box className="flex items-center cursor-pointer hover:text-gray-400">
                    <PlayArrowRoundedIcon />
                    <Typography>Play Trailer</Typography>
                  </Box>
                </Stack>

                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Overview
                  </Typography>
                  <Typography variant="subtitle2">
                    {data[0].overview}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        )}

        
        <Grid container style={{ flexGrow: 1 }}>
          <Grid item padding={1} xs={12} sm={9}>
            <MovieInfoBody id={id} type={type} />
          </Grid>
          <Grid item xs={12} sm={3} padding={1}>
            <MovieInfoSidebar />
          </Grid>
        </Grid>
        <Grid item>
          <TrendingCarousel />
        </Grid>
        <Grid item>
          <FreeToWatch />
        </Grid>
      </Grid>
    </>
  );
}

export default MovieInfo;
