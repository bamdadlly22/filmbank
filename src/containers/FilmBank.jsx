import { Route, Router, Routes } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import AboutUs from "../components/pages/AboutUs";
import Home from "../components/pages/Home";
import LoginRegister from "../components/pages/LoginRegister";
import Movie from "../components/pages/Movie";
import Movies from "../components/pages/Movies";
import NotFound from "../components/pages/NotFound";

const FilmBank = () => {
  return (
    <>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<Movie/>}/>
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/login-register" element={<LoginRegister/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </MainLayout>
    </>
  );
};

export default FilmBank;
