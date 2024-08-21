import { useContext } from "react";
import Banner from "../components/Home/Banner";
import { Context } from "../Context";
import SearchContainer from "../components/Search/SearchContainer";
import TrendingCarousel from "../components/Carousel/TrendingCarousel/TrendingCarousel";
import LatestTrailers from "../components/Carousel/LatestTrailers/LatestTrailers";
import Popular from "../components/Carousel/WhatPopular/Popular";
import FreeToWatch from "../components/Carousel/FreeToWatch/FreeToWatch";

function Home() {
  const { search } = useContext(Context);

  return (
    <>
      <Banner />

      <TrendingCarousel />
      <LatestTrailers />
      <Popular />
      <FreeToWatch />
      {/* <SearchContainer search={search} /> */}
      {/* {search && search.length !== 0 ? (
        <SearchContainer search={search} />
      ) : (
        <>
          <TrendingCarousel />
          <LatestTrailers />
          <Popular />
         
        </>
      )} */}
    </>
  );
}

export default Home;
