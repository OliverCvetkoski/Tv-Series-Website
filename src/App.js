import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from 'react-router-dom'
import LatestMovies from './pages/LatestMovies'
import Popular from "./pages/Popular";
import Watchlist from "./pages/Watchlist";
import { GlobalProvider } from "./context/GlobalCtx";
import Search from "./pages/Search";



function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LatestMovies />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/search" element={<Search />}></Route>
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </div >
    </GlobalProvider>
  );
};

export default App;
