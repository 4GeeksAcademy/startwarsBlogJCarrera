import React, { useContext, useState ,useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import CharacterFilm from "./CharacterFilm";

const DescriptionPlanet = () => {
  const params = useParams();
  const { store } = useContext(Context);
  // const descriptionPlanet = store.planets.find(
  //   (item) => item.uid == params.id
  // );
    const [descriptionPlanet, setDescriptionPlanet] = useState({});
    const placeholderImage =
    "https://starwars-visualguide.com/assets/img/placeholder.jpg";

 useEffect(() => {
    async function fetchData() {

      const characterBasicInfo = store.characters.find(
        (item) => item.uid == params.id
      );

      
      const response = await fetch("https://swapi.dev/api/planets/" + params.id);
      if (response.ok) {
        const data = await response.json();
        setDescriptionPlanet( data );
      }
    }
    fetchData();
  }, []);


  function handleImageError(e) {
    e.target.src = placeholderImage;
  }

  return (
    <div className="container bg-dark mt-3 px-0">
      <div className="row">
        <div className="container col-md-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg` || placeholderImage}
            className="container img-fluid"
            alt="..."
            onError={handleImageError}
          />
        </div>
        <div className="container col-md-8">
          <h3 className="container card-title text-white my-3">
            {descriptionPlanet.name}
          </h3>
          <div className="container row">
            <div className="col-md-5">
              <p className="card-text text-secondary">
                <span className="text-white">Rotation Period:</span>{" "}
                {descriptionPlanet.rotation_period}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Orbital Period:</span>{" "}
                {descriptionPlanet.orbital_period}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Diameter:</span>{" "}
                {descriptionPlanet.diameter}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Climate:</span>{" "}
                {descriptionPlanet.climate}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Gravity:</span>{" "}
                {descriptionPlanet.gravity}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Terrain:</span>{" "}
                {descriptionPlanet.terrain}
              </p>
            </div>
            <div className="col-md-5 mt-3">
              <p className="card-text text-secondary">
                <span className="text-white">Surface Water:</span>{" "}
                {descriptionPlanet.surface_water}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Population:</span>{" "}
                {descriptionPlanet.population}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Created:</span>{" "}
                {descriptionPlanet.created}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Edited:</span>{" "}
                {descriptionPlanet.edited}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Url:</span> {descriptionPlanet.url}
              </p>
            </div>
          </div>
          <div className="container row mt-4">
          {descriptionPlanet.films?.length && (
              <ul className="container col text-white list-unstyled">
                films:
                
                {descriptionPlanet.films.map((film) => {
                  
                  return (
                    <li className="text-secondary" key={film}>
                      <CharacterFilm url={film}  />
                    </li>
                  );
                })}
              </ul>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPlanet;