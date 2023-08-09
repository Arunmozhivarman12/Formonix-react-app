import { Col, Container, Row } from "react-bootstrap";
import freequote from "../../images/Free quote.png"
import money from "../../images/Money.png"
import far from "../../images/fast and reliable.png"

function Info() {
    return (
        <div>
            <Container fluid className="info-cont pt-5 pb-5">
                <Container className="minicont">
                    <Row >
                        <Col lg='4'>
                            <Row className="info-row mb-3">
                                <Col lg='3' className="bg-primary info-img">
                               <img src={money} className="info-pic" alt="money"></img>
                                </Col>
                                <Col lg='8' className="p-4 infos bg-light">
                                 <p className="info-head">Safe your money</p>
                                 <p className="info-des text-secondary mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore </p>
                                </Col>

                            </Row>

                        </Col>
                        <Col lg='4' >
                        <Row className="info-row mb-3">
                                <Col lg='3' className="bg-primary info-img2 ms-auto ">
                               <img src={freequote} className="info-pic" alt="freequote"></img>
                                </Col>
                                <Col lg='8' className="p-4 infos bg-light me-auto">
                                 <p className="info-head">Get a free quote</p>
                                 <p className="info-des text-secondary mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore </p>
                                </Col>

                            </Row>
                        </Col>
                        <Col lg='4'>
                        <Row className="info-row mb-3">
                                <Col lg='3' className="bg-primary info-img3 ms-auto">
                               <img src={far} className="info-pic" alt="icon"></img>
                                </Col>
                                <Col lg='8' className="p-4 infos bg-light ">
                                 <p className="info-head">Fast & reliable</p>
                                 <p className="info-des text-secondary mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore </p>
                                </Col>

                            </Row>
                        </Col>
                        
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Info;