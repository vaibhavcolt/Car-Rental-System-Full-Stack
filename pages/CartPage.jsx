import React, { useState } from 'react';
import Card from '../c/Card';
import './CartPage.css';


const CartPage = ({cart}) => {

  if (cart.length === 0) return null; // 👈 Don't render anything if cart is empty

  return (
    <div className="cart-display">
      <h2>🛒 Your Cart</h2>
      {cart.map((car) => (
        <div key={car.id} className="cart-item">
          <p><strong>{car.name}</strong> ({car.model})</p>
          <p>Fuel: {car.fuelType} | Capacity: {car.capacity}</p>
          <p>Price: ₹{car.pricePerDay}/day</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
