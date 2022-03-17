import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function From(props) {
    return (
        <div>
            <h1>{props.fHeading}</h1>
            <h5 className='py-3'>{props.fsHeading}</h5>
            <Form className='form'>
                <Row>
                    <Col sm={6}>
                        <Form.Control type='text' placeholder="First name" />
                    </Col>
                    <Col sm={6}>
                        <Form.Control type='text' placeholder="Last name" />
                    </Col>
                    <Col sm={6}>
                        <Form.Control type='email' placeholder="Enter Your email" />
                    </Col>
                    <Col sm={6}>
                        <Form.Control type='text' placeholder="ZIP Code" />
                    </Col>
                    <Col sm={6}>
                        <Form.Select aria-label="Default select example" className='form-control'>
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>

                    <Col sm={12}>
                        
                        <button type='submit' ><Link to="/profile" className='btn'>Get Started</Link></button>
                        
                        <div>
                            <p>
                                Already applied? &nbsp;
                                <span className='text-color'>
                                    <a href=''>
                                        Check your application status here.
                                    </a>
                                </span>
                            </p>


                        </div>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default From;