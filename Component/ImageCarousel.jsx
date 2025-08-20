import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './ImageCarousel.css'

const images = [
  'src\assets\audi.jpg',
  'src\assets\bmw.jpg',    
  'src\assets\mercedes.jpg',
  'src\assets\toyota.jpg',
  'src\assets\ford.jpg'
]



const ImageCarousel = () => {
     const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000


  };
  return (
    <div className="carousel-container">
        <div className="carousel-wrapper">
      <Slider {...settings} >
        {/* {images.map((src1) => (
          <div key={index}>
          console.log(src1);
            <img src={src1} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))} */}

         <div className='carousel-slider'>
        <img src='src\assets\audi.jpg' alt="horse" />
      </div>
      <div className='carousel-slider'>
        <img src='src\assets\audi.jpg' alt="horse" />
      </div>
      <div className='carousel-slider'>
        <img src='src\assets\audi.jpg' alt="horse" />
      </div>
      <div className='carousel-slider'>
        <img src='src\assets\audi.jpg' alt="horse" />
      </div>

      </Slider>
   
      </div>
      </div>

  )
}

export default ImageCarousel
