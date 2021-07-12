import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const RandomNumbers = () => {
    const LINES = 20;
    const MIN_NUMBER = 1;
    const MAX_NUMBER = 100;

    const [numbers, setNumbers] = useState([]);

    const generateNumbers = () => {
        const numbers = Array(LINES).fill().map(() => Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER).sort()
        setNumbers(numbers.sort((a ,b) => {return a - b}));
    }

    return (
        <>
            <Button variant="primary" size="lg" onClick={generateNumbers} block>Generate</Button>
            {numbers.length ?
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Even number</th>
                            <th>Odd number</th>
                        </tr>
                    </thead>
                    {numbers.map((number, id) => {
                        return (
                            (number % 2 === 0) ?
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>{number}</td>
                                    <td>-</td>
                                </tr>
                            :
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td>-</td>
                                    <td>{number}</td>
                                </tr>
                        )
                    })}
                </Table>
            : null}
        </>
    )
}

export default RandomNumbers;

