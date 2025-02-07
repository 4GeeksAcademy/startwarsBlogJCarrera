import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

const CardStarships = () => {
  const { store, actions } = useContext(Context);

  function addToFavorite(StarShips) {
    actions.addFavorite(StarShips);
  }

  return (
    <div className="row scroll-cards flex-nowrap overflow-auto gap-1">
      {store.startships.map((StarShips) => {
        return (
          <div
            key={StarShips.uid}
            className="card col-md-3 bg-dark text-secondary p-0 overflow-hidden"
          >
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${
                StarShips.uid
              }.jpg`}
              className="card-img-top"
            />
            <div className="container">
              <h5 className="my-2 text-white">{StarShips.name}</h5>
              <p className="m-0 p-0">Model: {StarShips.model}</p>
              <p className="m-0 p-0">Manufacturer: {StarShips.manufacturer}</p>
            </div>
            <div className="container d-flex justify-content-between align-items-end my-2 bg-dark h-100">
              <Link to={"/description/vehicle/" + StarShips.uid }>
                <button className="btn btn-outline-secondary">
                  Learn more!
                </button>
              </Link>
              <button
                className="btn btn-outline-danger"
                onClick={() => addToFavorite(StarShips)}
              >
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardStarships;