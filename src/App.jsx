import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieInfo from "./components/details/MovieInfo/MovieInfo";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route exact path="/:type/:id/:title" element={<MovieInfo />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
