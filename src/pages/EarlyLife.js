import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
const images = [
    '/images/civic.jpg',
    '/images/benz.jpg'
];

function EarlyLife() {
    return (
        <div className="container">
            <h1>Early life</h1>
            <p>I was born an only child in 6th of november of 2004. Ever since i was little, everything i got i would disassemble to see what was inside.
                I believe it was a key part of my unraveling as a future engineer. </p>
            <h1>My life and technology</h1>
            <p>Since young, my passion for computers, electronics, and programming was growing. I believe it all started with the <a href="https://pt.wikipedia.org/wiki/Port%C3%A1til_Magalh%C3%A3es">Magalhães</a>
             , where i would ge the itch about computers. </p>
            <p>Since young i was a <a href="https://en.wikipedia.org/wiki/Maker_culture">Maker</a>, ranging from board level repairs, gaming consoles hacking, fabrication, to custom eletric scooters, and motorized bikes.</p>
            <h1>2th biggest passion: Cars</h1>
            <p>My 2th biggest passion is cars, and everything motorized. It all started with my dad taking me to classic cars shows, me playing racing videogames such as: Gran Turismo, Grand Theft Auto, etc.<br/>
            Currently i own a 1989 Mercedes-Benz E-Klasse 300D, and an 1997 Honda Civic EK3.
            </p>
            <Carousel>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image}
                            alt={`Car image ${index + 1}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default EarlyLife;
