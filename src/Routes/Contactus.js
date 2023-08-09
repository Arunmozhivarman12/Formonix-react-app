import { Col, Container, Row, Button } from "react-bootstrap";
import Concall from "../images/contactus-call.png";
import Conmail from "../images/contactus-mail.png";


function Contactus(){
    return(
        <div>
<Container fluid className="Contactus-cont py-5">
                <Container className="minicont mt-4 py-5">
                    <h1 className="aboutus-head mt-4 text-light">
                    Contact Us
                    </h1>
                    <p className="mt-4 text-light">Providing the better loan policy to customers</p>
                </Container>
            </Container>
            <Container fluid className="mt-5">
                <Row>
                    <Col lg='6'md='6' sm='6' xs='12' className="conus mb-4">
                        <Row>
                            <Col  lg={{span:10, order: 1 }} md={{span:8, order: 1 }}  sm={{span:12, order: 2 }} xs={{span:12, order: 2 }}>
                            <span className="contactus-name">CALL US</span>
                        <p><a href="tel:+929808988798" className="contactus-link">+929808988798</a></p>
                            </Col>
                            <Col  lg={{span:2, order: 2 }} md={{span:4, order: 2 }}  sm={{span:12, order: 1 }} xs={{span:12, order: 1 }}>
                            <img src={Concall} alt="call"></img>
                            </Col>

                        </Row>
                        
                        

                    </Col>
                    <Col className="conus2">
                    <Row>
                        <Col lg='2' md='4' sm='12' xs='12'><img src={Conmail} alt="mail" className=""></img></Col>
                        <Col lg='10' md='8' sm='12' xs='12'> 
                    <span className="contactus-name">MAILUS</span>
                        <h5><a href="mailto:enquiry@formonix.com" className="contactus-link">enquiry@formonix.com</a></h5></Col>
                        
                    </Row>
                   


                    </Col>
                </Row>
                
            </Container>
            <Container fluid className="contactus-form pt-5">
                <Row className="justify-content-center mt-5">
            <Col className="contact-form pt-5 ps-4" lg='8' md='12' sm='12' xs='12'>
                    <Row>
                        <Col lg="6">
                        <input type="text" placeholder="Your Name" className="con-input p-2 mb-4 w-100"></input>
                        </Col>
                        <Col lg="6">
                         <input type="email" placeholder="Your Email" className="con-input p-2  mb-4 w-100"></input>
                        </Col>
                        <Col lg='6'>
                             <input type="text" placeholder="Your Mobile number" className="con-input p-2 mb-4 w-100"></input>
                        </Col>
                        <Col lg='6'>
                             <select className="con-input p-2 w-100 mb-4">
                        <option className="text-secondary">Select Loan type</option>
                        <option className="text-secondary">Personal Loan</option>
                        <option className="text-secondary">Home Loan</option>
                        <option className="text-secondary">Business Loan</option>
                        <option className="text-secondary">General Insurance</option>
                        <option className="text-secondary">Life Insurance</option>
                        <option className="text-secondary">Mutual Funds</option>

                    </select>
                        </Col>
                    </Row>
                    
                   
                    <textarea placeholder="Message" className="w-100 con-input pb-5 ps-1 pt-1">

                    </textarea>
                    <Button className="send-message py-2 px-3 mt-3 mb-3">Send Us Message</Button>

                  </Col>
</Row>
            </Container>
        </div>
    )
}

export default Contactus;