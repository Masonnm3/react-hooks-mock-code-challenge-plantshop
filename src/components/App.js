import React , {useState ,useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


const API = 'http://localhost:6001/plants'

function App() {
  
  const[plants , setPlants] = useState([])
  const[fplants , setFPlants] = useState([])

  

  useEffect(()=>{
  fetch(API)
   .then ((resp) => resp.json())
   .then(((data) =>{
   setPlants(data);
   setFPlants(data);}))
  },
  [])

  
  const handleSearch =(search) =>{
    const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(search));
  console.log(filteredPlants);
  setFPlants(filteredPlants)
  }
  
  
  
  
  
  
  
  
  
  
  return (
    <div className="app">
      <Header />
      <PlantPage plants={fplants} handleSearch={handleSearch} setPlants={setPlants} fplants={fplants} setFPlants={setFPlants} />
    </div>
  );
}

export default App;
