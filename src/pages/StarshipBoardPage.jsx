import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarshipCard from "../components/StarshipCard";
import getAllStarships from "../services/sw-api";

export default function StarshipBoardPage() {
  const [starship, setStarship] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getStarships() {
      const starships = [];
      starships.push(await getAllStarships(page));
      setStarship(starships);
    }

    getStarships();
  }, [page]);

  function loaded() {

    return (
      <div className="board">
        {starship[0].results.map((ship, index) => (
          <Link key={index} to={`/starships/${ship.name}`}>
            <StarshipCard ship={ship} />
          </Link>
        ))}
        <button onClick={() => setPage((page) => page - 1)}>Previous</button>
        <button onClick={() => setPage((page) => page + 1)}>Next</button>
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

  return starship[0] ? loaded() : loading();
}
