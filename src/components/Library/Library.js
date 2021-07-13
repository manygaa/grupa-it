import React, { useState } from 'react';
import { Container, Table, Button, Form, Col, Row } from 'react-bootstrap';

const Library = () => {
    const [numbers, setNumbers] = useState([]);

    const generateNumbers = () => {

    }

    return (
        <Container fluid>
            <h3>Library</h3>
            <Row>
                <h4>Add a Book</h4>
                <Form>
                    <Form.Group className="" controlId="formBookTitle">
                        <Form.Label>Book title</Form.Label>
                        <Form.Control type="text" placeholder="Book title" />
                    </Form.Group>
                    <Form.Group controlId="formAuthor">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Author" />
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>Reading priority</Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="1"
                                    name="1"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="2"
                                    name="2"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="3"
                                    name="3"
                                    id="formHorizontalRadios3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="4"
                                    name="4"
                                    id="formHorizontalRadios3"
                                />
                                <Form.Check
                                    type="radio"
                                    label="5"
                                    name="5"
                                    id="formHorizontalRadios3"
                                />
                            </Col>
                        </Form.Group>
                    </fieldset>
                    <Form.Group controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Comedy</option>
                            <option>Tragedy</option>
                            <option>Romance</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button> 
                </Form>
            </Row>
            <Row>
                <h4>List of books</h4>
                <Table>

                </Table>
            </Row>
        </Container>
    )
}

export default Library;

