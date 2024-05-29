import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import Input from 'react-phone-number-input/input'
import Form from 'react-bootstrap/Form';
import '../App.js';

function ContactComponent() {
    const [value, setValue] = useState("US");

    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

        return <a href={`mailto:${email}${params}`}>{children}</a>;
    };
    <Form.Control type="text" placeholder="Readonly input here..." readOnly />

    return (
        < Container style={{ backgroundColor: '#eec986' }} className="mt-5  d-flex align-items-center justify-content-center text-center" >
            <Row>
                <Form >

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            Phone Number
                        </Form.Label>
                      <Row>
                      <Input
                      className='rounded'
                        placeholder="Enter phone number"
                            defaultCountry="US"
                            value={value}
                            onChange={setValue} />

                      </Row>
                     
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mb-5">
                        Submit
                    </Button>
                    <Row className="mt-2 baseText">
                <Col>

                    <Mailto email="jensVarrage@gmail.com" subject="Subject" body={"Hello, Im interested in the "} >
                        <span className="" style={{ textDecoration: "none" }}>  Interested? Mail me!</span>
                    </Mailto>
                </Col>
            </Row>
                </Form>

            </Row>

            
           



        </Container>
    );

}
export default ContactComponent;