import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

const CardCharacter = () => {
  const { store, actions } = useContext(Context);

  function addToFavorite(character) {
    actions.addFavorite(character);
  }

  return (
    <div className="row scroll-cards flex-nowrap overflow-auto gap-2">
      {store.characters.map((character) => {
        return (
          <div
            key={character.uid}
            className="card col-md-3 col-sm-2 bg-dark text-secondary p-0 m-0 "
          >
            <div className="card-box-img overflow-hidden">
              <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${
                  character.uid
                }.jpg`}
                className="card-img-top"
              />
            </div>

            <div className="body-card container">
              <h5 className="my-2 text-white">{character.name}</h5>
              <p className="m-0 p-0">Gender: {character.gender}</p>
              <p className="m-0 p-0">Hair Color: {character.hair_color}</p>
              <p className="m-0 p-0">Eye-Color: {character.eye_color}</p>
            </div>

            <div className="container d-flex justify-content-between align-items-end my-2">
              <Link
                to={"/description/character/" + character.uid }
              >
                <button className="btn btn-outline-secondary">
                  Learn more!
                </button>
              </Link>
              <button
                className="btn btn-outline-danger"
                onClick={() => addToFavorite(character)}
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

export default CardCharacter;