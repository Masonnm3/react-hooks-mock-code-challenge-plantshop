import React , {useState} from "react";

function NewPlantForm({handleAddPlant}) {
  const [addedName , setAddedName] =useState("")
  const [addedImg , setAddedImg] =useState("")
  const [addedPrice , setAddedPrice] =useState("")

  const addPlant ={
    name:addedName,
    image:addedImg,
    price:addedPrice

  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit ={(e)=> {
        e.preventDefault();
        handleAddPlant(addPlant)
      }}
      >
        <input type="text" name="name" value={addedName} placeholder="Plant name"  onChange={(e)=>setAddedName(e.target.value)}/>
        <input type="text" name="image" value={addedImg} placeholder="Image URL" onChange={(e)=> setAddedImg(e.target.value)}/>
        <input type="number" name="price" value={addedPrice} step="0.01" placeholder="Price" onChange={(e)=>setAddedPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
