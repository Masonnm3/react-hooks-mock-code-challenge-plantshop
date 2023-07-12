import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants , handleSearch , setPlants , fplants , setFPlants}) {
  
  const handleAddPlanet =  (plant) => {
    fetch("http://localhost:6001/plants" , {
    method: 'POST' , 
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(plant)
    }
    )
    .then((resp) => resp.json())
      .then((data) =>{
       setFPlants([...fplants , data]);
       setPlants([...plants , data])});
      }
  
  return (
    <main>
      <NewPlantForm  handleAddPlant={handleAddPlanet}/>
      <Search handleSearch={handleSearch}/>
      <PlantList  plants={plants}/>
    </main>
  );
}

export default PlantPage;
