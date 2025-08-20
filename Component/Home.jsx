import CartPage from '../pages/CartPage'
import Registration from '../pages/Registration'

import AllSearch from './AllSearch'
import Card from './Card'
import Footer from './Footer'
import ImageCarousel from './ImageCarousel'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'



const Home = () => {

  const [cars, setCars] = useState([]);



  const [cart, setCart] = useState([]);
    useEffect(() => {
    console.log("Updated cart:", cart);
  }, [cart]);
const handleAddToCart = (car) => {
  if (!cart.find(item => item.id === car.id)) {
    const updatedCart = [...cart, car];
    setCart(updatedCart);
    console.log("Car added to cart:", updatedCart);
  } else {
    console.log("Car already in cart");
  }
};

  return <>
    <Navbar />
     <div style={{ paddingTop: '60px' }}>
    <AllSearch setCars={setCars} />
    <ImageCarousel />
      {/* <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <div style={{ flex: 1, paddingRight: cart.length > 0 ? '320px' : '0' }}>
      <Card cars={cars} handleAddToCart={handleAddToCart} />
    </div>

    {cart.length > 0 && <CartPage cart={cart} />}
  </div> */}
    {/* <Card cars={cars} handleAddToCart={handleAddToCart} />
    <CartPage cart={cart} /> */}
    <Footer />
    </div>
  </>
}

export default Home