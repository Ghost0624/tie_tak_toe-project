import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './pages/dashboard';
import Game from './pages/game';
import './App.css';

const Router = () => {

  return (
    <BrowserRouter> 
      <Routes>
        <Route>
          <Route path="/" element={<Dashboard />} />
          <Route path="game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
