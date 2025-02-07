import React from "react";

import "../../styles/home.css";
import CardCharacter from "../component/CardCharacters.js";
import CardStartships from "../component/CardStarships.js";
import CardPlanet from "../component/CardPlanets.js";

export const Home = () => (
  <div className="container">
    <div className="mt-2">
      <h3 className="text-white">Characters</h3>
      <CardCharacter />
    </div>

    <div className="mt-5">
      <h3 className="text-white">Planets</h3>
      <CardPlanet />
    </div>

    <div className="mt-5">
      <h3 className="text-white">Startships</h3>
      <CardStartships/>
    </div>
  </div>
);