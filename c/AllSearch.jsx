import { useState } from 'react'
import axios from 'axios';
import './AllSearch.css';

const AllSearch = ({ setCars }) => {

  const [location, setLocation] = useState('');
  const [transmission, setTransmission] = useState('');
  const [fuel, setFuel] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8080/api/search', {
        params: {
          capacity, 
          location: location.toLowerCase(),
          transmission: transmission.toLowerCase(),
          fuelType: fuel.toLowerCase(),
        }
      });
      setCars(response.data); 
      console.log('Search results:', response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }

  };

  return (
    <div className="all-search">
      <form className="search-form" onSubmit={handleSearch}>
        <input type="text" placeholder="Pickup Location" value={location} onChange={(e) => setLocation(e.target.value)} required />



        <select value={transmission} onChange={(e) => setTransmission(e.target.value)}>
          <option value="">Transmission</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>

        <select value={fuel} onChange={(e) => setFuel(e.target.value)}>
          <option value="">Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>

        <input
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(Number(e.target.value))}
          min={1}
          max={7}
          step={1}
          placeholder="Car Capacity (1–7)"
          required
          style={{ width: 128 }} />

        <button type="submit" onClick={handleSearch}>Search</button>
      </form>
    </div>
  )
}
export default AllSearch
