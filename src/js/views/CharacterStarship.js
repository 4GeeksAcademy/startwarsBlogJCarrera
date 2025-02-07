import React, { useContext, useState ,useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const CharacterStarship = ({url}) => {
  const params = useParams();
  const [data, setData] = useState({});
  const { store } = useContext(Context);
  const id = url.match(/\d+/);

  useEffect(() => {
    async function fetchData() {

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setData( data );
        console.log({data})
      }
    }
    fetchData();
  }, []);


  return (
    <div className="detailContainer m-3">
      <img className="img img-round w-100" src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} />
      <div className="text-center">{data.name}</div>
    </div>
  );
};

export default CharacterStarship;