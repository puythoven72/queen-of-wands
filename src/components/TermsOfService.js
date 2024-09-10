import StringUtility from './utility/StringUtility';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function TermsOfService() {

    return (
        <Container >
        <Row style={{ borderRadius: '10px', border: '1px solid black' }} className="termsText mt-2 text-center d-flex align-items-center justify-content-center">
           <Col>
           <span className="p-1" dangerouslySetInnerHTML={{ __html: StringUtility.TERMS_OF_SERVICE }} />
           </Col>
           
        </Row>
        </Container>
    );


}

export default TermsOfService;