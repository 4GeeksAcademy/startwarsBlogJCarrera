import React, { useContext, useState ,useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const CharacterStarship = ({url}) => {
  const params = useParams();
  const [data, setData] = useState({});
  const { store } = useContext(Context);

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
     <div>{data.name}</div>
  );
};

export default CharacterStarship;