import React, { useContext, useState ,useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import CharacterFilm from "./CharacterFilm";
import CharacterVehicle from "./CharacterVehicle";
import CharacterStarship from "./CharacterStarship";

const DescriptionCharacter = () => {
  const params = useParams();
  const [descriptionCharacter, setDescriptionCharacter] = useState({});
  const { store } = useContext(Context);

  useEffect(() => {
    async function fetchData() {

      const characterBasicInfo = store.characters.find(
        (item) => item.uid == params.id
      );


      //if (!characterBasicInfo) {
      //  return;
     // }
      
      const response = await fetch("https://swapi.dev/api/people/" + params.id);
      if (response.ok) {
        const data = await response.json();
        setDescriptionCharacter( data );
      }
    }
    fetchData();
  }, []);



  // const descriptionCharacter = store.characters.find(
  //   (item) => item.uid == params.id
  // );
  //window.s = store.characters;
 // console.log({s:store.characters}); 
 // console.log({descriptionCharacter});
  return (
     <div className="container bg-dark mt-3 px-0">
      <div className="row">
        <div className="container col-md-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${
              params.id
            }.jpg`}
            className="container img-fluid"
            alt="..."
          />
        </div>
        <div className="container col-md-8">
          <h3 className="container card-title text-white my-3">
            {descriptionCharacter.name}
          </h3>
          <div className="container row">
            <div className="col-md-5">
              <p className="card-text text-secondary">
                <span className="text-white">Height:</span>{" "}
                {descriptionCharacter.height}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Mass:</span>{" "}
                {descriptionCharacter.mass}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Hair-Color:</span>{" "}
                {descriptionCharacter.hair_color}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Skin-Color:</span>{" "}
                {descriptionCharacter.skin_color}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Eye-Color:</span>{" "}
                {descriptionCharacter.eye_color}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Birth-Year:</span>{" "}
                {descriptionCharacter.birth_year}
              </p>
            </div>
            <div className="col-md-5 mt-3">
              <p className="card-text text-secondary">
                <span className="text-white">Gender:</span>{" "}
                {descriptionCharacter.gender}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Homeworld:</span>{" "}
                {descriptionCharacter.homeworld}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Created:</span>{" "}
                {descriptionCharacter.created}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Edited:</span>{" "}
                {descriptionCharacter.edited}
              </p>
              <p className="card-text text-secondary">
                <span className="text-white">Url:</span>{" "}
                {descriptionCharacter.url}
              </p>
            </div>
          </div>

          <div className="container row mt-4">
            {descriptionCharacter.films?.length && (
              <ul className="container col text-white list-unstyled">
                films:
                
                {descriptionCharacter.films.map((film) => {
                  
                  return (
                    <li className="text-secondary" key={film}>
                      <CharacterFilm url={film}  />
                    </li>
                  );
                })}
              </ul>
            )}

            {descriptionCharacter.vehicles?.length && (
              <ul className="container col text-white list-unstyled">
                Vehicles:
                {descriptionCharacter.vehicles.map((vehicle) => {
                  return (
                    <li className="text-secondary" key={vehicle}>
                      <CharacterVehicle url={vehicle} />
                    </li>
                  );
                })}
              </ul>
            )}

            {descriptionCharacter.starships?.length && (
              <ul className="container col text-white list-unstyled">
                Vehicles:
                {descriptionCharacter.starships.map((starship) => {
                  return (
                    <li className="text-secondary" key={starship}>
                      <CharacterStarship url={starship} />
                    </li>
                  );
                })}
              </ul>
            )}

            {descriptionCharacter.Starships?.length && (
              <ul className="container col text-white list-unstyled">
                Starships:
                {descriptionCharacter.Starships.map((Starships) => {
                  return (
                    <li className="text-secondary" key={Starships}>
                      {Starships}
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

export default DescriptionCharacter;