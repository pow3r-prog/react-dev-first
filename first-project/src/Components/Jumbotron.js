import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap';
import pict1 from '../pict1.jpg';
import styled from 'styled-components';

const Styles = styled.div `
    .jumbo {
        background: url(${pict1}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        rigth: 0;
        z-index: -1;
    }
`;

const Junbotron = () => (
    <Styles>
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h1>Pow3r comp</h1>
            <p>
                Some test text Some test text Some test text
                Some test text Some test text Some test text
                Some test text Some test text Some test text
            </p>
        </Container>
    </Jumbo>
    </Styles>
)

export default Junbotron;
