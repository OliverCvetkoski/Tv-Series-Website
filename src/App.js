import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from 'react-router-dom'
import LatestMovies from './Pages/LatestMovies'
import Popular from "./Pages/Popular";
import Watchlist from "./Pages/Watchlist";
import { GlobalProvider } from "./Context/GlobalCtx";
import Search from "./Pages/Search";



function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LatestMovies />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </div >
    </GlobalProvider>
  );
};

export default App;
