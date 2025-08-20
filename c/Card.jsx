import {useState} from 'react'
import './Card.css'

const Card = ({cars, handleAddToCart}) => {


if (cars.length === 0) return null; 

  return (
    <div className="card-container">
     {cars.length === 0 ? (
        <p>No cars found.</p>
      ) : (
        cars.map((car) => (
          <div key={car.id} className="card">
        <div  className="card-content">
          <p className="card-title">Name: {car.name}</p>
          <p className="card-title">Model: {car.model}</p>
          <p className="card-title">Fule Type: {car.fuelType}</p>
          <p className="card-title">Capacity: {car.capacity}</p>
          <p className="card-description">Discription: {car.discription}</p>
          <div className="card-footer">   
              <span className="card-price">Price: ₹{car.pricePerDay}</span>
              <button className="details-btn" onClick={() => handleAddToCart(car)}>Add to Cart</button>
           </div>
        </div>
      </div>
        ))
      )}  
      </div>
        
  )
}

export default Card

  {/* <div className="img-container">
          <img src="src\assets\audi.jpg" alt="" />
        </div> */}
