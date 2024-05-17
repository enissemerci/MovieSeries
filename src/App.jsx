import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { FooterComponent } from "./components/FooterComponent";
import { HomePage } from "./components/HomePage";
import MovieSeriesPage from "./components/MovieSeriesPage";

function App() {
  //tüm route işlemlerimi burada yaptım Navbar ve footerın her sayfada olmasını istediğim için onları routes dışına aldım
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MovieSeriesPage category="movies" />} />
        <Route path="/series" element={<MovieSeriesPage category="series" />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
