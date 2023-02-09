import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Pokemons from "../pages/Pokemons";
import PokemonDetail from "../pages/PokemonDetail";
import NotFound from "../pages/NotFound";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemons" element={<Pokemons />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
