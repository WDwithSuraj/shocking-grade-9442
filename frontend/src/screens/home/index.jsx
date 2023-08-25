import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from '../library';
import Feed from '../feed';
import Trending from '../trending';
import Player from '../player';
import Favorite from '../favourites/index.js';
import "./home.css";
import Sidebar from '../../components/sidebar';

function Home() {
  return (
    <Router>
      <div className="main-body">
        <Sidebar /> 
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Home