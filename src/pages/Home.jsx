import Banner from "../components/Home/Banner";
import TrendingCarousel from "../components/Carousel/TrendingCarousel/TrendingCarousel";
import { Grid } from "@mui/material";
import Popular from "../components/Carousel/WhatPopular/Popular";
import FreeToWatch from "../components/Carousel/FreeToWatch/FreeToWatch";
import SearchContainer from "../components/Search/SearchContainer";
import { useContext } from "react";
import { Context } from "../Context";

function Home() {
  const { search } = useContext(Context);
  return (
    <>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Banner />
        </Grid>

        {search?.length > 0 ? (
          <Grid item>
            <SearchContainer search={search} />
          </Grid>
        ) : (
          <>
            <Grid item>
              <TrendingCarousel />
            </Grid>
            <Grid item>
              <Popular />
            </Grid>
            <Grid item>
              <FreeToWatch />
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}

export default Home;
