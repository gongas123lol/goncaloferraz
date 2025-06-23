import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Home.css';
const images = [
    '/images/civic.jpg',
    '/images/benz2.jpg'
];

function EarlyLife() {
    return (
        <div className="container">
            <h1>Early life</h1>
            <p>I was born an only child in 6th of november of 2004. Ever since i was little, everything i got i would disassemble to see what was inside.
                I believe it was a key part of my unraveling as a future engineer. </p>
            <div style={{ height: '100px' }}></div>
            <h1>My life and technology</h1>
            <p>Since young, my passion for computers, electronics, and programming was growing. I believe it all started with the <a href="https://pt.wikipedia.org/wiki/Port%C3%A1til_Magalh%C3%A3es">Magalhães</a>
             , where i would ge the itch about computers. </p>
            <p>Since young i was a <a href="https://en.wikipedia.org/wiki/Maker_culture">Maker</a>, ranging from board level repairs, gaming consoles hacking, fabrication, to custom eletric scooters, and motorized bikes.</p>
            <div style={{ height: '100px' }}></div>
            <h1>2th biggest passion: Cars</h1>
            <p>My 2th biggest passion is cars, and everything motorized. It all started with my dad taking me to classic cars shows, me playing racing videogames such as: Gran Turismo, Grand Theft Auto, etc.<br/>
            Currently i own a 1989 Mercedes-Benz E 300D, and an 1996 Honda Civic MA8.
            </p>
            <div style={{ height: '100px' }}></div>
            <Carousel style={{ width: '600px', height: '700px', margin: '0 auto' }}>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image}
                            alt={`Car image ${index + 1}`}
                            style={{ objectFit: 'cover', width: '100%', height: '700px' }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>


        </div>
    );
}

export default EarlyLife;
