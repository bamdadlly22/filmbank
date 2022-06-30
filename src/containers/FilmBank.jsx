import { Route, Router, Routes } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import AboutUs from "../components/pages/AboutUs";
import FindMovies from "../components/pages/FindMovies";
import Home from "../components/pages/Home";
import Movie from "../components/pages/Movie";
import Movies from "../components/pages/Movies";

const FilmBank = () => {
  return (
    <>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<Movie/>}/>
        <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
    </MainLayout>
    </>
  );
};

export default FilmBank;
