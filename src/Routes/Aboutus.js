import {  Col, Container, Row } from "react-bootstrap";
import Group from '../images/Group.png';
import call from '../images/Groupcall.png';
import people from "../images/people.png"
import wwd from "../images/Group-wwd.png"
import vision from "../images/Group-vision.png"
import purpose from "../images/Group-purpose.png"



function Aboutus(){
    return(
        <div>
           <Container fluid className="Aboutus-cont py-5">
            <Container className="minicont mt-4 py-5">
                <h1 className="aboutus-head mt-4 text-light">
                    About Us
                </h1>
                <p className="mt-5 text-light">Providing the better loan policy to customers</p>
            </Container>
           </Container>
           <Container className="minicont">
                <Row className="py-5">
                    <Col lg='4' md='6' sm='12' xs='12' className="me-5 mb-4">
                    <img src={Group} className="w-100  floating" alt="group"></img>
                    </Col>
                    <Col lg='7'>
                    <span className="text-secondary about-head">ABOUT COMPANY</span><div className="blueline mb-1 ms-2"></div>
                 <p className="about-head2 mt-3">Providing the best Loan policy to customers</p>
                 <p className="text-secondary aboutus-desc ">Formonix is a financial consulting company that provides its financial services to many metros and other
                     cities of the country such as Bangalore, Chennai, Hyderabad, Coimbatore, Vellore, Mumbai, Pune, Delhi,
                      Kolkata and many other regions. The main services of our company include personal loan, home loan and
                       business loan. We are a leading this with many private banks in the country providing these service to various regions
                        of the country with skilled employees. We work with leading private banks of the country like HDFC, Axis, ICICI, 
                        Standard Chartered, Kotak Mahindra, IDFC First, IndusInd, Yes Bank and several bank and non-banking financial corporations
                         like Axis Finance, Bajaj Finance, Tata Capital, Aditya Birla,  Poona Wala, Incred. Finance And we are providing our service with many other financial companies.</p>
                   <Row>
                    <Col lg='2'>
                    <img src={call} alt="call" className="d-block m-auto"></img>
                    </Col >
                    <Col lg='3' className="pt-2 text-center">
                     <a href="nk" className="aboutus-call ">Call Experts</a>
                     <p className="aboutus-num">+91-987xxxxx87</p>
                    </Col>
                   </Row>
                    </Col>
                </Row>
            </Container>
            <Container className="minicont">
                <Row className='justify-content-center'>
                    <Col lg='9'>
                 <img src={people} alt="people" className="w-100"></img>
                    </Col>
                </Row>
                 <Container className="aboutus-info px-5 pt-5">
                    <Row className="mt-5 pt-5 pb-3">
                        <Col className=' pt-5' lg="4">
                            <img src={wwd} alt="wwd"></img>
                            <h5 className="text-light font-weight-bold mt-3">
                                What we do?
                            </h5>
                            <p className="aboutus-desc text-light">
                            Formonix provides a best financial platform 
                            to its customers where they can decide on the option 
                            they want and get the right service. We do not collect 
                            any kind of charges from our customers for providing these services.
                            </p>
                        </Col>
                        <Col className=' pt-5' lg="4">
                        <img src={vision} alt="wwd"></img>
                            <h5 className="text-light font-weight-bold mt-3">
                                Vision
                            </h5>
                            <p className="aboutus-desc text-light">
                            Formonix is a financial consulting company that provides its financial services to many metros .
                             Our aim is to provide accurate offers and customer satisfaction, which strengthens our relationship with our customers.
                            </p>
                        </Col>
                        <Col className=' pt-5' lg="4">
                        <img src={purpose} alt="wwd"></img>
                            <h5 className="text-light font-weight-bold mt-3">
                                purpose
                            </h5>
                            <p className="aboutus-desc text-light">
                            Our skilled employees thoroughly check the customer's profile and help to provide
                             the best offer for them, customer satisfaction is our main objective. We have a 
                             team of experts who are familiar with bank by bank policy and handle the customer profile.
                            </p>
                        </Col>
                        
                    </Row>

            </Container>
            </Container>
           

        </div>
    )
}

export default Aboutus