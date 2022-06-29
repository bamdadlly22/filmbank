import { Route, Router, Routes } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import AboutUs from "../components/pages/AboutUs";
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
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/movies/:id" element={<Movie/>}/>
      </Routes>
    </MainLayout>
    </>
  );
};

export default FilmBank;
