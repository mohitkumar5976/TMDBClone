import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieInfo from "./components/details/MovieInfo/MovieInfo";
import Popular from "./pages/Popular";
import NowPlaying from "./pages/NowPlaying";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import ApplicationWrapper from "./pages/ApplicationWrapper";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<ApplicationWrapper />}>
            <Route exact path="/" index element={<Home />} />
            <Route exact path="/:type/:id/:title" element={<MovieInfo />} />
            <Route exact path="movie/popular" element={<Popular />} />
            <Route exact path="movie/now-playing" element={<NowPlaying />} />
            <Route exact path="movie/upcoming" element={<Upcoming />} />
            <Route exact path="movie/top-rated" element={<TopRated />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
