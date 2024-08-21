import { useContext } from "react";
import Banner from "../components/Home/Banner";
import { Context } from "../Context";

function Home() {
  const { search } = useContext(Context);

  return (
    <>
      <Banner />
      {/* {search && search.length !== 0 ? (
        <SearchContainer search={search} />
      ) : (
        <>
          <TrendingCarousel />
          <LatestTrailers />
          <Popular />
          <FreeToWatch />
        </>
      )} */}
    </>
  );
}

export default Home;
