import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import Input from 'react-phone-number-input/input'
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import "../App.css";
import Alert from 'react-bootstrap/Alert';


const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

function ContactComponent() {

    const [value, setValue] = useState("");
    //used for messages
    const [submitStatus, setSubmitStatus] = useState(null);
    const [messageDisplay, setMessageDisplay] = useState("");
    const [alertVariant, setAlertVariant] = useState("");

    const [validated, setValidated] = useState(false);
    const successMessage = "Success - Your Message Has Been Successfully Submitted";
    const errorPhone = "Error - Invalid Phone Number";
    const errorMessage = "Error - Your Form Has Not Been Submitted. Something Went Wrong!";


    useEffect(() => {
        displayMessage()
    }, [submitStatus]);


    const displayMessage = () => {
        switch (submitStatus) {
            case "success":
                setAlertVariant("success");
                setMessageDisplay(successMessage);
                break;
            case "errorPhone":
                setAlertVariant("danger");
                setMessageDisplay(errorPhone);
                break;
            case "error":
                setAlertVariant("danger");
                setMessageDisplay(errorMessage);
                break;

        }
    }

    const clearMessage = () => {
        setSubmitStatus(null);
    };


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
                setSubmitStatus("success")
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error')
            });

        e.target.reset();
        setValue("");
    };



    const validateInput = (event) => {
        const form = event.currentTarget;

        //Check Phone Is valid, or empty
        const validPhone = validatePhone(form.phone.value);
        if (!validPhone) {
            setSubmitStatus("errorPhone");
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

    return (
        <>
            <Container>
               

                <Row className="mt-2  d-flex align-items-center justify-content-center text-center">
                    <Col className="">
                        <h1 className="splashTitle ">
                            CONTACT QUEEN OF WANDS
                        </h1>
                    </Col>
                </Row>
            </Container>

            < Container className="mt-2 p-2 d-flex align-items-center justify-content-center text-center " >


                <Row  >

                <>
                    {submitStatus != null ?
                        <Alert key={alertVariant} variant={alertVariant} className="mt-2">
                            {messageDisplay}
                        </Alert>
                        : null
                    }
                </>
                    <Form onSubmit={validateInput} noValidate validated={validated} className="mt-1 aboutText" style={{ borderRadius: '15px', border: '1px solid black' }}>

                        <Form.Group className="m-3" controlId="formBasicEmail">
                            <span style={{ color: "red" }}>*</span>
                            <Form.Label className="">Name</Form.Label>
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



                        <Form.Group className="m-3" controlId="formBasicEmail">
                            <span style={{ color: "red" }}>*</span>
                            <Form.Label className="">Email address</Form.Label>
                            <Form.Control type="email"
                                placeholder="Enter Email"
                                required
                                name='from_email'
                                maxLength="30"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter Your E-Mail.
                            </Form.Control.Feedback>
                            <small><small>
                                We'll never share your email with anyone else.
                            </small>
                            </small>

                        </Form.Group>

                        <Form.Group className="m-3" controlId="formBasicEmail">
                            <Form.Label className="">
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

                        <Form.Group className="m-3" controlId="exampleForm.ControlTextarea1">
                            <span style={{ color: "red" }}>*</span>
                            <Form.Label className="">Message (200 Characters) Please include details about services you are interested in.</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                required
                                name='message'
                                maxLength="200"
                                placeholder="Enter Message"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter Your Message.
                            </Form.Control.Feedback>
                        </Form.Group>






                        <Button variant="" type="submit" className="mb-5 btn-custom "  style={{ fontFamily: 'Roboto' }}>
                            SUBMIT
                        </Button>
                        {/* <Row className="mt-2 baseText">
                            <Col>

                                <Mailto email="jensVarrage@gmail.com" subject="Subject" body={"Hello, Im interested in the "} >
                                    <span className="" style={{ textDecoration: "none" }}>  Interested? Mail me!</span>
                                </Mailto>
                            </Col>
                        </Row> */}
                    </Form>

                </Row>






            </Container>
        </>
    );

}
export default ContactComponent;