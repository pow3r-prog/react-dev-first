import React from 'react';
import { Carousel } from 'react-bootstrap';
import { } from 'react-bootstrap';
import pict1 from '../pict1.jpg';
import pict2 from '../pict2.jpg';
import pict3 from '../pict3.jpg';


export default function Slider() {
    return (
    <Carousel>
        <Carousel.Item style={{'height': '600px'}}>
            <img
                className="d-block w-100"
                src={pict1}
                alt="slider 1"
            />
            <Carousel.Caption>
                <h3>Pow3r slider text</h3>
                <p>Some test text.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
            <img
                className="d-block w-100"
                src={pict2}
                alt="slider 2"
            />
            <Carousel.Caption>
                <h3>Pow3r slider text</h3>
                <p>Some test text.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
            <img
                className="d-block w-100"
                src={pict3}
                alt="slider 3"
            />
            <Carousel.Caption>
                <h3>Pow3r slider text</h3>
                <p>Some test text.</p>
            </Carousel.Caption>
        </Carousel.Item>
        
    </Carousel>
)}