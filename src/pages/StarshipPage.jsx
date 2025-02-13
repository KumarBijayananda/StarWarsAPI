import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function StarshipPage() {
  const [shipInfo, setShipInfo] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    async function getShip() {
      try {
        const url = `https://swapi.dev/api/starships/?search=${name}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);

        setShipInfo(data.results);
      } catch (error) {
        console.error(error);
      }
    }

    getShip();
  },[name]);


function loaded() {
 

  return (
    <div className="shipPage">
      <h3>{shipInfo[0].name}</h3>
    </div>
  );

  }

  function loading() {
    return (
      <div className="board">
        <h1>Loading</h1>
      </div>
    );
  }

  return shipInfo[0] ? loaded() : loading();


}
