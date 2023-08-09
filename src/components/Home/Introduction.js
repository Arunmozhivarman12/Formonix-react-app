import { Container, Row, Col, Button } from "react-bootstrap";

function Intro(){
    return(
        <div>
            <Container fluid className="intro pb-5">
            <Container className="pb-5 minicont">
                <Row className="">
                    <Col className='pt-5 mt-5' lg="5">
                    <h1 className="intro-col">We are Formonix, India's Largest<br></br> Loan Distributor</h1>
                    <p className="text-secondary mt-3  intro-para">Phaselus condementum laorette turpis sodales<br></br> in. integer leo arcu, mollis amor tempor</p>
                    <Button className='intro-btn px-4 py-3 mt-2'>Let's Get Started</Button>
                    </Col>
                </Row>
            </Container>
            </Container>
        </div>
    )
}

export default Intro;