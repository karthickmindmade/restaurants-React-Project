import React from "react"
import { Carousel } from 'react-bootstrap'
export default function CakeDetailsImageSlider(props) {
    const { image } = props;
    var images;
    if(image===undefined){
        images=[];
    }else{
        images=image;
    }
  
    return (
        <Carousel id="arrowSlider" className="ms-arrow-slider carousel slide" data-ride="carousel" data-interval="false" indicators={false}>
            {images.map((img)=>
              <Carousel.Item>
              <img className="d-block align-center" src={img} alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                  <h3 className="text-white text-uppercase">{props.title}</h3>
              </div>
          </Carousel.Item>
            )}
          
        </Carousel>
    )
}