import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import lc from "../images/loan-call.png";
import llc from "../images/Loan-laptop.png"
import Accordion from 'react-bootstrap/Accordion';
import lci from "../images/loan-call-icon.png";
import lm from "../images/loan-mail.png";
import { BsArrowRight } from "react-icons/bs";





function Lifeinsurance() {
    return (
        <div>
            <Container fluid className="Aboutus-cont py-5">
                <Container className="minicont mt-4 py-5">
                    <h1 className="aboutus-head mt-4 text-light">
                    Life Insurance
                    </h1>
                    <p className="mt-4 text-light">Providing the better loan policy to customers</p>
                </Container>
            </Container>
            <Container className="minicont">
                <Row>
                    <Col className="" lg='3' md='3' sm='12' xs='12'>
                        <Row>
                            <Col lg='12' className="pt-3">
                                <Link to={'/Personalloan'} className="services mt-3 mb-2 py-2 ps-2">Personal Loan<span className="arrow"><BsArrowRight/></span></Link>
                                <Link to={'/Homeloan'} className="services mt-2 mb-2 py-2 ps-2">Home Loan<span className="arrow"><BsArrowRight/></span></Link>
                                <Link to={'/Businessloan'} className="services mt-2 mb-2 py-2 ps-2">Business Loan<span className="arrow"><BsArrowRight/></span></Link>
                                <Link to={'/Generalinsurance'} className="services mt-2 mb-2 py-2 ps-2">General Insurance<span className="arrow"><BsArrowRight/></span></Link>
                                <Link to={'/Lifeinsurance'} className="services1 mt-2 mb-2 py-2 ps-2">Life Insurance<span className="arrow"><BsArrowRight/></span></Link>
                                <Link to={'/MutualFund'} className="services mt-2 mb-2 py-2 ps-2" >Mutual Funds<span className="arrow"><BsArrowRight/></span></Link>
                            </Col >
                            <Col lg='12' className="loan-cont mt-3 py-5">
                                <img src={lc} alt="call" className="d-block m-auto "></img>
                                <p className="text-light fs-3 text-center font-weight-bold mt-4">Quick insurance process</p>
                                <p className="text-light text-center mb-0">Talk to an expert</p>
                                <p className=" text-center"><a href="tel:+9198989899" className="text-light">+91 9556677787</a></p>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="" lg='9' md='9' sm='12' xs='12'>
                        <Row>
                            <Col lg='12' className="p-5 pb-0">
                                <img src={llc} alt="loan" className="w-100"></img>
                            </Col>
                            <Col lg='12' className="p-5 pt-3 ">
                                <h3 className="loan-head">Life Insurance</h3>
                                <p className="text-secondary aboutus-desc" >Life Insurance can be defined as a contract between an insurance policy holder and an insurance company, where the insurer promises to pay a sum of money in exchange for a premium, upon the death of an insured person or after a set period.
                                 This Life Cover secures your loved ones' future by paying a lump sum amount in case of an unfortunate event.
                                </p>
                                <h5>We are partner with</h5>
                               <ul className="mt-3">
                                <li className="text-secondary">Future Generali</li>
                                <li className="text-secondary">Bharati Axa</li>
                               </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className="minicont mt-4">
                <Row>
                    <Col lg='2' sm='12' xs='12'>
                        <Row>
                            <Col lg='12'>
                                <div className="single-chart">
                                    <svg viewBox="0 0 36 36" className="circular-chart blue">
                                        <path className="circle-bg"
                                            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <path className="circle"
                                            strokeDasharray="90, 100"
                                            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <text x="20" y="20.35" className="percentage">90%</text>
                                    </svg>
                                </div>
                                <p className="list-text text-center mt-0 mb-0">Affordable cost</p>
                            </Col>
                            <Col lg='12'>
                                <div className="single-chart">
                                    <svg viewBox="0 0 36 36" className="circular-chart blue">
                                        <path className="circle-bg"
                                            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <path className="circle"
                                            strokeDasharray="80, 100"
                                            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <text x="20" y="20.35" className="percentage">80%</text>
                                    </svg>
                                </div>
                                <p className="list-text text-center mt-0 mb-0">Quality of work</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col >
                        <Row>
                            <Col lg='12'>
                                <p className="about-head2 mt-3">Frequently Asked<br></br>
                                    Questions</p>
                            </Col>
                            <Col lg='12'>
                            <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0" >
                                        <Accordion.Header className="p-2">What is the EMI for a business loan?</Accordion.Header>
                                        <Accordion.Body>
                                        There are several factors that determine your business loan EMI, including the amount of the loan, the length of the loan, and the interest rate.
                                         You can use our online business loan EMI calculator to find out how much EMI you need to pay.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className="p-2 mt-4">Can I get a business loan without a business account?</Accordion.Header>
                                        <Accordion.Body>
                                        A business account is not required if you run a sole proprietorship. 
                                        To get a business loan, however, you must have a business account if you are a partnership or LLC.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header className="p-2 mt-4">What is the repayment schedule for my business loan?</Accordion.Header>
                                        <Accordion.Body>
                                        Formonix offers a 60-month repayment term. We offer flexible repayment terms based on your business's financial needs and affordability. 
                                        Our EMI plans allow you to repay the loan according to your income cycle.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className="minicont mt-5">
                <Row className="justify-content-center">
                    <Col lg='11' className="loan-b2 ps-5 pt-5 pe-4 pb-4">
                        <Row>
                            <Col>
                      <h5 className="text-light ">We are here to help</h5>
                    <p className="mt-4 text-light" >Want to build the right competitive solutions?</p>
                            </Col>
                            <Col>
    <Button className="cbtn d-block ms-auto">CONTACT US</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className="minicont mt-5">
                <Row>
                  <Col className="mb-3" lg='6' md='12' sm='12' xs='12'>
                  <span className="text-secondary about-head">CONTACT WITH US</span><div className="blueline mb-1 ms-2"></div>
                 <p className="about-head2 mt-3">Have questions? Feel free<br></br>
to write us</p>
                 <p className="text-secondary aboutus-desc ">Formonix personal loans help you finance urgent requirements without collateral.</p>
                 <Row >
                    <Col className="" lg='2'>
                       <img src={lci} alt="call"></img>
                    </Col>
                    <Col lg='6' className="my-auto">
                    <h6 className="text-secondary loan-head">Call expert</h6>
                    <h6 className=""><a href="tel:9633636373" className="loan-head">96633 44133</a></h6>
                    </Col>

                 </Row>
                 <Row className="mt-3">
                    <Col className="" lg='2'>
                       <img src={lm} alt="call"></img>
                    </Col>
                    <Col lg='6' className="my-auto">
                    <h6 className="text-secondary loan-head">Write email</h6>
                    <h6 className=""><a href="mailto:enquiry@formonix.com" className="loan-head">enquiry@formonix.com</a></h6>
                    </Col>

                 </Row>
                  </Col>
                  <Col className="contact-form pt-5 ps-4" lg='6' md='12' sm='12' xs='12'>
                    <Row>
                        <Col lg="6">
                        <input type="text" placeholder="Your Name" className="con-input p-2 mb-3 w-100"></input>
                        </Col>
                        <Col lg="6">
                         <input type="email" placeholder="Your Email" className="con-input p-2  mb-3 w-100"></input>
                        </Col>
                        <Col lg='6'>
                             <input type="text" placeholder="Your Mobile number" className="con-input p-2 mb-3 w-100"></input>
                        </Col>
                        <Col lg='6'>
                             <select className="con-input p-2 w-100 mb-3">
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

export default Lifeinsurance;