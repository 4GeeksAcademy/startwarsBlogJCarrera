import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const Descriptionstartships = () => {
  const params = useParams();
  const { store } = useContext(Context);
  const Descriptionstartships = store.startships.find(
    (item) => item.uid == params.id
  );

  return (
    <div className="container bg-dark mt-3 px-0">
      <div className="row">
        <div className="container col-md-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${
              Descriptionstartships.uid
            }.jpg`}
            className="container img-fluid"
            alt="..."
          />
        </div>
        <div className="container col-md-8">
          <h3 className="container card-title text-white my-3">
            {Descriptionstartships.name}
          </h3>
          <div className="container row">
            <div className="col-md-5">
              <p className="card-text text-secondary">
                <span className="text-white">Model:</span>{" "}
                {Descriptionstartships.model}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Manufacturer:</span>{" "}
                {Descriptionstartships.manufacturer}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Cost in Credits:</span>{" "}
                {Descriptionstartships.cost_in_credits}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Length:</span>{" "}
                {Descriptionstartships.length}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Max Atmosphering Speed:</span>{" "}
                {Descriptionstartships.max_atmosphering_speed}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Crew:</span>{" "}
                {Descriptionstartships.crew}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Passengers:</span>{" "}
                {Descriptionstartships.passengers}
              </p>
            </div>
            <div className="col-md-5 mt-3">
              <p className="card-text text-secondary">
                <span className="text-white">Cargo Capacity:</span>{" "}
                {Descriptionstartships.cargo_capacity}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Consumables:</span>{" "}
                {Descriptionstartships.consumables}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Vehicle Class:</span>{" "}
                {Descriptionstartships.vehicle_class}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Created:</span>{" "}
                {Descriptionstartships.created}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Edited:</span>{" "}
                {Descriptionstartships.edited}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Url:</span>{" "}
                {Descriptionstartships.url}
              </p>
            </div>
          </div>
          <div className="container row mt-4">
            <ul className="col-md-5 text-white list-unstyled">
              Pilots:
              {Descriptionstartships.pilots.map((pilot) => {
                return (
                  <li className="text-secondary" key={pilot}>
                    {pilot}
                  </li>
                );
              })}
            </ul>
            <ul className="col-md-5 text-white list-unstyled">
              Films:
              {Descriptionstartships.films.map((film) => {
                return (
                  <li key={film} className="text-secondary">
                    {film}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descriptionstartships;