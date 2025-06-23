import Carousel from "bootstrap/js/src/carousel";
import "Carroussel.css";
import React, { useState } from 'react';

function Carousel({ images }) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="carousel">
            <button className="carousel-btn prev" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="carousel-images">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className={`carousel-img ${
                            index === current ? 'active' : ''
                        }`}
                    />
                ))}
            </div>
            <button className="carousel-btn next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
}

export default Carousel;
