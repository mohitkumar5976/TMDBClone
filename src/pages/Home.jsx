import { useContext } from "react";
import Banner from "../components/Home/Banner";
import { Context } from "../Context";
import SearchContainer from "../components/Search/SearchContainer";
import TrendingCarousel from "../components/Carousel/TrendingCarousel/TrendingCarousel";
import LatestTrailers from "../components/Carousel/LatestTrailers/LatestTrailers";
import Popular from "../components/Carousel/WhatPopular/Popular";
import FreeToWatch from "../components/Carousel/FreeToWatch/FreeToWatch";
import { Grid } from "@mui/material";

function Home() {
  const { search } = useContext(Context);

  return (
    <>
      <Banner />

      {search && search.length !== 0 ? (
        <SearchContainer search={search} />
      ) : (
        <>
          <Grid container paddingLeft={0.5} spacing={1}>
            <Grid item>
              <TrendingCarousel />
            </Grid>
            <Grid item>
              <Popular />
            </Grid>
            <Grid item>
              <FreeToWatch />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

export default Home;
