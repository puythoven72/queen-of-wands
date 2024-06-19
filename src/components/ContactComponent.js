import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import Input from 'react-phone-number-input/input'
import Form from 'react-bootstrap/Form';
import '../App.js';
import emailjs from 'emailjs-com';

import InputGroup from 'react-bootstrap/InputGroup';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

function ContactComponent() {
    const [value, setValue] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [validated, setValidated] = useState(false);
    // const [stateMessage, setStateMessage] = useState(null);


    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

        return <a href={`mailto:${email}${params}`}>{children}</a>;
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setValidated(false);
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully')
            }, (error) => {
                console.log(error.text);
                alert('Something went wrong!')
            });

        e.target.reset();
        setValue("");
    };



    const validateInput = (event) => {
        const form = event.currentTarget;
        //Check Phone Is valid, or empty
        const validPhone = validatePhone(form.phone.value);
        if (!validPhone) {
            alert("Invaild Phone Number");
        }
        //Check required fields
        if (form.checkValidity() === false || !validPhone) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            handleOnSubmit(event);
        }
    };

    const validatePhone = (phone) => {

        if (phone.length > 0 && phone.length < 14) {
            return false;
        } else {
            return true;
        }
    };


    // const validateInput = (e) => {
    //     e.preventDefault();
    //     let name = e.target.from_name.value;
    //     console.log(name + " IS NAME");
    //     let email = e.target.from_email.value;
    //     console.log(email + " IS email");

    //     let phone = e.target.phone.value;
    //     console.log(phone + " IS phone");

    //     let message = e.target.message.value;
    //     console.log(message + " IS text area");

    //     // setName(e.target.fname.value);
    //     // setEmail(e.target.femail.value);

    //     console.log(name)
    //     // props.addContact(name, email);
    //     handleOnSubmit(e);
    // }










    return (
        < Container  className="mt-5  d-flex align-items-center justify-content-center text-center crownBkRound" >
            <Row >
                <Form onSubmit={validateInput} noValidate validated={validated}  className="mt-1">

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <span style={{ color: "red" }}>*</span>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter Name"
                            required
                            name='from_name'
                            minLength="3"
                            maxLength="30"
                        />

                        <Form.Control.Feedback type="invalid">
                            Please Enter Your Name.
                        </Form.Control.Feedback>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>



                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <span style={{ color: "red" }}>*</span>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                            placeholder="Enter Email"
                            required
                            name='from_email'
                            maxLength="30"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter Your E-Mail.
                        </Form.Control.Feedback>
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
                                placeholder="Enter Phone Number (Optional)"
                                value={value}
                                onChange={setValue}
                                name='phone'
                                country="US"
                                maxLength="14"
                                minLength="14"
                            />

                        </Row>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <span style={{ color: "red" }}>*</span>
                        <Form.Label>Message (200 Characters)</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            required
                            name='message'
                            maxLength="200"
                            placeholder="Please include details about services you are interested in."
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter Your Message.
                        </Form.Control.Feedback>
                    </Form.Group>






                    <Button variant="primary" type="submit" className="mb-5" >
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