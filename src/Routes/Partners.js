
import { Container, Row, Col, Button } from "react-bootstrap";
import Bank from "../images/Bank.jpg";
import kotak from "../images/kotak.png"
import sc from "../images/sc.jpg"
import icici from "../images/Icici.png"
import idfc from "../images/idfc.png"
import hdfc from "../images/Hdfc.png"
import indusind from "../images/indusind.png"
import axis from "../images/Axis.png"
import Slider from "react-slick";
import AB from "../images/AB.png"
import Axisf from "../images/Axis finance.png"
import b28 from "../images/b28.png"
import tc from "../images/tata_capital.jpg"
import pw from "../images/poonawala.png"
import incred from "../images/incred.png"




function Partners(){
   
        
        const settings = {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            
            autoplaySpeed: 3000,
            responsive: [ {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                 {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 1500,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
               
               
              ]
         
          };
   
       
  return(
    <div>
         <Container fluid className="Aboutus-cont py-5">
                <Container className="minicont mt-4 py-5">
                    <h1 className="aboutus-head mt-4 text-light">
                    Partners
                    </h1>
                    <p className="mt-4 text-light">Providing the better loan policy to customers</p>
                </Container>
            </Container>
            <Container className="minicont">
                <Row className="py-5">
                    <Col lg='6' md='6' sm='12' xs='12' className=" mb-4">
                    <img src={Bank} className="w-100  floating" alt="group"></img>
                    </Col>
                    <Col lg='6' className="m-auto">
                    <span className="text-secondary about-head">OUR</span><div className="blueline mb-1 ms-2"></div>
                 <p className="about-head2 mt-3">Partners</p>
                 <p className="text-secondary aboutus-desc ">Formonix is a financial consulting company that provides its financial services to many metros and other cities of the country such as Bangalore, Chennai, Hyderabad, Coimbatore, Vellore, Mumbai, Pune, Delhi, Kolkata and many other regions.
</p>
<p className="text-secondary aboutus-desc "> Formonix is partnered with tops banks to give you best loan facilities at attractive interest rates. We bridge the gap between you and our partner banks to provide you one stop solution for all your loan needs.</p>
                </Col>
                </Row>
            </Container>
            <Container className="pb-4">
         <h5 className="text-center about-head2 fs-4">We are sourcing to listed banks</h5>
        <Slider {...settings} className="mt-5">
          <div>
           <img src={kotak} alt="kotak" className="w-75 d-block mx-auto"></img>
          </div>
          <div>
          <img src={icici} alt="icici" className="w-75 d-block mx-auto"></img>
          </div>
          <div>
          <img src={idfc} alt="idfc" className="w-75 d-block mx-auto"></img>
          </div>
          <div>
          <img src={axis} alt="axis" className="w-75 d-block mx-auto"></img>
          </div>
          <div>
          <img src={hdfc} alt="hdfc" className="w-75 d-block mx-auto"></img>
          </div>
          <div>
          <img src={indusind} alt="indusind" className="w-75 d-block mx-auto"></img>
          </div>
          <div>
          <img src={sc} alt="sc" className="w-75 d-block mx-auto"></img>
          </div>
        </Slider>
     
           
            </Container>
            <Container className="mt-5">
         <h5 className="text-center about-head2 fs-4">and NBFC's</h5>
        <Slider {...settings} className="mt-5">
          <div>
           <img src={AB} alt="NBFC" className="w-75 d-block mx-auto"></img>
          </div>
          <div>
          <img src={Axisf} alt="NBFC" className="w-75 d-block mx-auto"></img>
          </div>
          <div>
          <img src={b28} alt="NBFC" className="w-75 d-block mx-auto"></img>
          </div>
          <div>
          <img src={tc} alt="NBFC" className="w-75 d-block mx-auto"></img>
          </div>
          <div>
          <img src={pw} alt="NBFC" className="w-75 d-block mx-auto"></img>
          </div>
          <div>
          <img src={incred} alt="NBFC" className="w-75 d-block mx-auto"></img>
          </div>
        </Slider>
     
           
            </Container>
            <Container className="minicont mt-5">
                <Row className="justify-content-center">
                    <Col lg='10' className="loan-b2 ps-5 pt-5 pe-4 pb-4">
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
    </div>
  )
};

export default Partners;