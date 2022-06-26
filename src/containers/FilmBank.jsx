import { Route, Router, Routes } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from "../components/pages/Home";
import Movies from "../components/pages/Movies";

const FilmBank = () => {
  return (
    <>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
    </MainLayout>
    </>
  );
};

export default FilmBank;
