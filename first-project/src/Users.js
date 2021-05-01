import React from 'react';
import { Container, Table } from 'react-bootstrap';

export const Users = () => (
    <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@twitter</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@twitter</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Larry</td>
                <td>Chips</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td>4</td>
                <td>Jason</td>
                <td>Stethem</td>
                <td>@twitter</td>
                </tr>
                <tr>
                <td>5</td>
                <td>JTom</td>
                <td>Cruse</td>
                <td>@twitter</td>
                </tr>
                <tr>
                <td>6</td>
                <td>Harry</td>
                <td>Potter</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td>7</td>
                <td>Mark</td>
                <td>Lailow</td>
                <td>@twitter</td>
                </tr>
                <tr>
                <td>8</td>
                <td>Elon</td>
                <td>Musk</td>
                <td>@twitter</td>
                </tr>
                <tr>
                <td>9</td>
                <td>Pitter</td>
                <td>Pan</td>
                <td>@twitter</td>
                </tr>
            </tbody>
    </Table>
</Container>
)