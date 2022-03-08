import React from 'react'
import {Carousel} from 'react-bootstrap'
import './Gallery.css';
import pic1 from '../gallery/pic1.jpg'
import pic2 from '../gallery/pic11.jpg'
import pic3 from '../gallery/pic3.jpg'
import pic4 from '../gallery/pic6.jpg'
import pic5 from '../gallery/pic5.jpg'

export const Gallery = () => {
  return (
    <>
      <Carousel>
      <Carousel.Item interval={2000}>
        <img
            className="d-block w-100"
            src={pic1}
           alt="First slide"
         />
       <Carousel.Caption>
          <h3>Picture 1</h3>
         <p>Beautiful dog</p>
          </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item interval={2000}>
       <img
        className="d-block w-100"
        src={pic2}
        alt="Second slide"
        />
        <Carousel.Caption>
         <h3>Picture 2</h3>
         <p>Cloud City</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img
       className="d-block w-100"
       src={pic3}
       alt="Third slide"
       />
       <Carousel.Caption>
       <h3>Picture 3</h3>
       <p>Motorcycle</p>
       </Carousel.Caption>
       </Carousel.Item>
  
       <Carousel.Item interval={2000}>
       <img
       className="d-block w-100"
       src={pic4}
       alt="Third slide"
       />
        <Carousel.Caption>
       <h3>Picture 4</h3>
       <p>Sandy Mountains</p>
       </Carousel.Caption>
       </Carousel.Item>

       <Carousel.Item interval={2000}>
        <img
       className="d-block w-100"
       src={pic5}
       alt="Third slide"
       />
       <Carousel.Caption>
       <h3>Picture 5</h3>
       <p>Rain</p>
       </Carousel.Caption>
       </Carousel.Item>
       </Carousel>
       </>
  )
}
