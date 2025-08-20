import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import './AddNewCar.css';
const AddNewCar = () => {
    const [car, setCar] = useState({
        name: '',
        model: '',
        description: '',
        capacity: '',
        image: '',
        pricePerDay: '',
        available: true,
    });

    const nav = useNavigate();
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCar((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // try {
        //   const response = await axios.post('http://localhost:8080/api/cars', car);
        //   alert('Car added successfully!');
        //   setCar({ name: '', model: '', pricePerDay: '', available: true });
        nav('/');

        // } catch (error) {
        //   console.error('Error adding car:', error);
        //   alert('Failed to add car.');
        // }
    };

    return (
        <div className="add-car-container">
            <h2>Add New Car</h2>
            <form onSubmit={handleSubmit}>
                <label className='form-label'>
                    Car Name:
                    <input className='addcarinput' type="text" name="name" value={car.name} onChange={handleChange} required />
                </label>
                <label>
                    Model:
                    <input className='addcarinput' type="text" name="model" value={car.model} onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <textarea className='addcarinput' name="description" value={car.description} onChange={handleChange} rows="3" required />
                </label>
                <label>
                    Capacity:
                    <input className='addcarinput' type="number" name="capacity" value={car.capacity} min={1}
                        max={7} onChange={handleChange} required />
                </label>
                <label>
                    Price/Day (₹):
                    <input className='addcarinput' type="number" name="pricePerDay" value={car.pricePerDay} onChange={handleChange} required />
                </label>
                <label className="checkbox-label">
                    Available:
                    <input className='addcarinput' type="checkbox" name="available" checked={car.available} onChange={handleChange} />
                </label>
                <button type="submit">Add Car</button>
            </form>
        </div>

    )
}

export default AddNewCar
