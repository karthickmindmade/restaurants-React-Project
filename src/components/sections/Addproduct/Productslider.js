import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'

export default function Productslider(props) {
    const { images } = props
    var imageurl = []

    for (let i = 0; i < images.length; i++) {
        imageurl.push(URL.createObjectURL(images[i]))
    }
    return (
        <Carousel id="imagesSlider" className="ms-image-slider carousel slide" data-ride="carousel" indicators={false}>
            {imageurl.map((img) =>
                <Carousel.Item>
                    <img className="d-block w-100" src={img} alt="First slide" />
                </Carousel.Item>
            )}
        </Carousel>
    );
}
