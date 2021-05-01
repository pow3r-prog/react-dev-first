import React from 'react';
import Slider from './Components/Slider';
import Jumbotron from './Components/Jumbotron';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import pict1 from './pict1.jpg';
import pict2 from './pict2.jpg';
import pict3 from './pict3.jpg';

export const Home = () => (
    <>

    <Slider />
    <Container style={{paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={pict1} />
                    <Card.Body>
                        <Card.Title>Pow3r picture</Card.Title>
                        <Card.Text>
                            Some test text Some test text Some test text 
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={pict2} />
                    <Card.Body>
                        <Card.Title>Pow3r picture</Card.Title>
                        <Card.Text>
                            Some test text Some test text Some test text 
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={pict3} />
                    <Card.Body>
                        <Card.Title>Pow3r picture</Card.Title>
                        <Card.Text>
                            Some test text Some test text Some test text 
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    <Jumbotron />
    <Container style={{marginBottom: '30px'}}>
        <Row>
            <Col md={7}>
                <img src={pict1} height={400}/>
            </Col>
            <Col md={5}>
                <h2>Pow3r comp</h2>
                <p>
                    Some test text Some test text Some test text
                    Some test text Some test text Some test text
                    Some test text Some test text Some test text
                </p>
            </Col>
        </Row>
    </Container>




    </>
)