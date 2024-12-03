import '../App.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import email from '../assets/images/email.png'
import insta from '../assets/images/instagram.png'
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function Footer(props) {
    const year = new Date().getFullYear();

    function updateNav(e, navItem) {
        props.setActiveLink(navItem);

    };

    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

        return <a href={`mailto:${email}${params}`}>{children}</a>;
    };
    return (
        <footer className="footer "  >
            <Container fluid className='pt-3 '>
                <Row className='d-flex align-bottom  text-center queenFont'>

                    <Col>
                        <Link to="https://www.instagram.com/queen_of_wands_tarot_advising?igsh=MWlsMTNjNnh2Mzg1OQ==" target="_blank">
                            <img
                                src={insta}
                                alt="Instagram Link"
                            />
                            <span className="align-bottom px-1"> CHECK ME OUT ON INSTAGRAM</span>
                        </Link>
                    </Col>

                </Row>

                <Row className='d-flex align-bottom  text-center'>
                    <Col >
                        {/* <small><small><a href='https://dryicons.com/free-icons/email'> Icon by Dryicons </a></small></small> */}
                        <small>  <Link to="/TermsOfService" onClick={event => updateNav(event, "/TermsOfService")}>Terms of Services</Link></small>
                    </Col>
                </Row>

                <Row className='p-2'>
                    <Col className='d-flex align-items-center justify-content-center text-center'>
                        <small> <small> {`Copyright © Queen Of Wands Tarot Advising, LTD  ${year}`} </small></small>
                    </Col>

                </Row>

            </Container>

        </footer>

    );


}

export default Footer;