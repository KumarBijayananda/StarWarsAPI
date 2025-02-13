import { Routes, Route } from "react-router-dom";
import StarshipBoardPage from "./pages/StarshipBoardPage";
import StarshipPage from "./pages/StarshipPage";
import "./App.css";

function App() {
  return(
<>
<Routes>
  <Route path='/' element={<StarshipBoardPage />}/>
  <Route path='/starships/:name' element={<StarshipPage />}/>
</Routes>
</>
  )
}

export default App;
