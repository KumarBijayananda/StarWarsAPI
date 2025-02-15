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
      <h1>Name: {shipInfo[0].name}</h1>
      <h2>Manufacturer: {shipInfo[0].manufacturer}</h2>
      <h2>Length: {shipInfo[0].length}</h2>
      <h2>Passengers: {shipInfo[0].passengers}</h2>
    


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
