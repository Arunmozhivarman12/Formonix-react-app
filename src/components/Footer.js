import { Container, Row, Col } from "react-bootstrap";
import twitter from "../images/F Twitter.png"
import fb from "../images/F Facebook.png"
import insta from "../images/F Insta.png"
import li from "../images/F Linked in.png"
import mail from "../images/F mail.png"
import call from "../images/F call.png"
import send from "../images/Send.png"
import logo from "./../images/Lobgo.png"

function Footer() {
    return (
        <div>
             <Container fluid className="Footer-info pt-5 pb-3 mt-5">
                    <Container className="minicont">
                    <Row className="mt-5 pt-3 pb-3 ">
                    <Col lg={3} md={6} sm={6} xs={12} className="mb-3"> 
                    <img src={logo} alt="logo" className="logo"></img>
                    <p className="mt-4 text-light">Loan that reflects the way you live your life</p>
                    <span>
                        <img src={twitter} alt="twit" ></img>
                        <img src={fb} alt="fb" className="ms-2"></img>
                        <img src={insta} alt="insta" className="ms-2"></img>
                        <img src={li} alt="li" className="ms-2"></img>
                    </span>
                   
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} className="mb-5">
                    <span className="text-light ">Contact</span><div className="blueline mb-1 ms-2"></div>
                       <p className="mt-4  contact-info">88 Brooklyn Golden Road Street,New York,USA</p>
                       <Row className="mb-2"><Col lg='1' md={1} sm={1} xs={1}><img src={mail} alt="mail" className="pb-1 footer-icon"></img></Col><Col><span className="contact-info ms-2"><a href="mailto:Contact@example.com">Contact@example.com</a></span></Col></Row>
                       <Row><Col lg='1' md={1} sm={1} xs={1}><img src={call} alt="call" className=" footer-icon"></img></Col><Col><span className="contact-info ms-2 "><a href="tel:+919663344133">+1(307)776-0608</a></span></Col></Row>
                       
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} className="mb-5">
                    <span className="text-light ">Resources</span><div className="blueline mb-1 ms-2"></div>
                       <p className="contact-info mt-3 mb-3">Media Coverage</p>
                       <p className="contact-info mb-3">Blogs</p>
                       <p className="contact-info mb-3">Events</p>
                       <p className="contact-info mb-3">Careers</p>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12}>
                       <h6 className="text-white ">Newsletter</h6>
                       <p className="mt-4 contact-info">Subscribe our newsletter to get our latest update & news</p>
                       <input type={'email'} placeholder='Email Address' className="mt-3 p-3 footer-input w-75"></input><img src={send} alt="send" className=" p-3 send"></img>
                       
                    </Col>
                </Row>
</Container>
   <Container className="text-light footer-copy pt-4 pb-2">
                  <p>&copy;2023 copyrights by Formonix.All Rights Reserved</p>
                </Container>
                </Container>
             
        </div>
    )
}

export default Footer;