import React , {useState} from "react";

function PlantCard({plant}) {
  
  const { name , image , price } = plant ;
  const [isInStock , setIsInStock] = useState(true)
  
  function handleClick(){
    setIsInStock(!isInStock)
  }


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={handleClick}className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick} className='primary'> Out of Stock </button>
      )}
    </li>
  );
}

export default PlantCard;
