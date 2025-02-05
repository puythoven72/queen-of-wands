import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";
import Input from 'react-phone-number-input/input'
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import "../App.css";
import Alert from 'react-bootstrap/Alert';
import { useLocation } from 'react-router-dom';


const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;



function ContactComponent(props) {
    const location = useLocation();



    const [value, setValue] = useState("");
    //used for messages
    const [submitStatus, setSubmitStatus] = useState(null);
    const [messageDisplay, setMessageDisplay] = useState("");
    const [alertVariant, setAlertVariant] = useState("");
    const [contactTitle, setContactTitle] = useState("CONTACT QUEEN OF WANDS");
    const [isRSVP, setIsRSVP] = useState(false);
    const [rsvpMessage, setRsvpMessage] = useState("");

    const [validated, setValidated] = useState(false);
    const successMessage = "Success - Your Message Has Been Successfully Submitted";
    const errorPhone = "Error - Invalid Phone Number";
    const errorMessage = "Error - Your Form Has Not Been Submitted. Something Went Wrong!";

    useEffect(() => {
        setIsRSVP(false);

        if (props.navigation === "topNav") {
            setContactTitle("CONTACT QUEEN OF WANDS");
            document.getElementById("message").value = null;
            setIsRSVP(false);
        } else {
            let rsvpdata = location.state?.data;
            checkRSVP(rsvpdata);
        }

        displayMessage()


    }, [submitStatus, props.navigation]);

    const checkRSVP = (rsvpdata) => {
        if (rsvpdata != null && rsvpdata != "undefined") {
            let rsvp = JSON.parse(rsvpdata);
            setContactTitle("RSVP For " + rsvp.location + " ON " + rsvp.date);
            setRsvpMessage("I will be attending your event at " + rsvp.location + " on " + rsvp.date + ".");
            document.getElementById("message").value = "I will be attending your event at " + rsvp.location + " on " + rsvp.date + ".";
            setIsRSVP(true);
        }
    }



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


    const handleOnSubmit = (e) => {
        e.preventDefault();
        setValidated(false);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                //  console.log(result.text);
                setSubmitStatus("success")
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error')
            });

        e.target.reset();
        setValue("");
    };



    const validateRSVP = (event) => {

        const form = event.currentTarget;

        //Check required fields
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            handleOnSubmit(event);
        }
    }

    const validateContact = (event) => {
        const form = event.currentTarget;
        // Check Phone Is valid, or empty
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
    }


    const validateInput = (event) => {

        if (isRSVP) {
            validateRSVP(event);
        } else {
            validateContact(event);
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
                            {contactTitle}
                        </h1>
                    </Col>
                </Row>
            </Container>

            < Container className="mt-2 p-2 d-flex align-items-center justify-content-center text-center" >
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

                        <Form.Group className="m-3" controlId="from_name">
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

                        <Form.Group className="m-3" controlId="from_email">
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
                            <small><small>
                                We'll never share your email with anyone else.
                            </small>
                            </small>

                        </Form.Group>
                        {
                            !isRSVP ?

                                (<Form.Group className="m-3" controlId="phone">
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
                                ) : (null)
                        }

                        <Form.Group className="m-3" controlId="message">
                        {
                            !isRSVP ?(
                            <Form.Label><span style={{ color: "red" }}>*</span>Message (500 Characters) Please include details about services you are interested in.</Form.Label>
                           
                        ) : (null)
                    }
                            <Form.Control as="textarea" rows={3}
                                required={isRSVP ? false : true}
                                name='message'
                                readOnly={isRSVP ? true : false}
                                maxLength="500"
                                placeholder="Enter Message"

                            />
                            <Form.Control.Feedback type="invalid">
                                Please Enter Your Message.
                            </Form.Control.Feedback>
                        </Form.Group>





                        <Row >
                            <Col    >
                                <Button variant="" type="submit" className="mb-5 btn-custom " size="lg" >
                                    SUBMIT
                                </Button>
                            </Col>
                        </Row>

                    </Form>
                </Row>

            </Container>
        </>
    );

}
export default ContactComponent;