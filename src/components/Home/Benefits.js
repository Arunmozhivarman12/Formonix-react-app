import { Container, Row, Col } from "react-bootstrap";
import certified from "../../images/Certified.png";
import pyl from "../../images/protect your life.png";
import ip from "../../images/insurance policy.png";
import benifits from "../../images/Benefits image.png"

function Benifits() {
    return (
        <div>
            <Container className="pb-4 minicont">
                <Row>
                    <Col lg='6' className="mb-4">
                        <span className="text-secondary about-head">COMPANY BENIFITS</span><div className="blueline mb-1 ms-2"></div>
                        <p className="about-head2 mt-2">We inspire & help our customers</p>
                        <span className="p-2 Ben-points">Magna paretra</span>
                        <span className="p-2 ms-5 Ben-points">Etiam id porta</span>
                        <p className="about-des mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua labore et dolore magna aliqua.</p>
                        <Row className="mt-4">
                            <Col lg='1' md='1' className="ps-1">
                                <img src={certified} alt="certified" className="certified"></img>
                            </Col>
                            <Col lg='11' md='11' sm='12' xs='12'>
                                <span className="mt-3  Ceo-name">Certified</span>
                                <p className="ceo ">Magna aliqua labore et dolore magna aliqua.</p>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg='1' md='1' className="ps-1">
                                <img src={pyl} alt="pyl" className="certified"></img>
                            </Col>
                            <Col lg='10' md='10' sm='12' xs='12'>
                                <span className="mt-3  Ceo-name">Protect your life</span>
                                <p className="ceo ">Magna aliqua labore et dolore magna aliqua.</p>
                            </Col>
                        </Row>
                        <Row>
                        <Col lg='1' md='1' className="ps-1">
                                <img src={ip} alt="ip" className="certified"></img>
                            </Col>
                            <Col lg='11' md='11' sm='12' xs='12'>
                                <span className="mt-3  Ceo-name">Insurance policy</span>
                                <p className="ceo ">Magna aliqua labore et dolore magna aliqua.</p>
                            </Col>
                        </Row>


                    </Col>
                    <Col>
                    <img src={benifits} alt="benifits" className="w-100 d-block ms-auto"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Benifits


