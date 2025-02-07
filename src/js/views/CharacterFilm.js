import React, { useContext, useState ,useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const CharacterFilm = ({url}) => {
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
     <div>
      {data.title}
      <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} />
     </div>
  );
};

export default CharacterFilm;