import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './pages/dashboard';
import Game from './pages/game';
import Blog from "./pages/blog";
import './App.css';

const Router = () => {

  return (
    <BrowserRouter> 
      <Routes>
        <Route>
          <Route path="/" element={<Dashboard />} />
          <Route path="rest" element={<Game />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
