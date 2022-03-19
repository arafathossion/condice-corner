import React from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';



const CreateGig = () => {
    return (
        <div className='gs h-100'>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Form>
                            <Row className="mb-5">
                                <Form.Group md={12} controlId="formGridEmail">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px', }} className='titlePain mb-4'
                                    />
                                </Form.Group>

                                <Form.Group md={12} controlId="formGridPassword">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '150px' }}
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-5 pb-5">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type='text' placeholder='$20 Per Hour'/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type='file' />
                                </Form.Group>
                            </Row>

                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default CreateGig;