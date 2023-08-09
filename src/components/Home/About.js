import { Container, Row, Col, Button } from "react-bootstrap";
import about from "../../images/About us Image.png";


function About(){
    return(
        <div>
           <Container fluid className="mb-5">
            <Container className="minicont">
                <Row>
                 <Col lg="6" >
                    <img src={about} className="w-100" alt="about"></img>

                 </Col>
                 <Col lg="6 p-4">
                 <span className="text-secondary about-head">ABOUT COMPANY</span><div className="blueline mb-1 ms-2"></div>
                 <p className="about-head2 mt-3">Providing the best Loan policy to customers</p>
                 <p className="mt-3 about-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor </p>
                
                    
                        <p className="list-text mb-0"><span className="material-symbols-rounded me-2">check_circle</span>Lorem ipsum dolor sit amet</p>
                   
                    <p className="list-text mb-0"><span className="material-symbols-rounded me-2">check_circle</span>  Experienced & Qualified Agents</p>
                
                   
                    <p className="list-text mb-0"><span className="material-symbols-rounded me-2">check_circle</span>  Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  
                    
                    <p className="list-text "><span className="material-symbols-rounded me-2">check_circle</span>Experts Team Member</p>
                  
                  <Button className="dis-btn px-4 py-3">Discover More</Button>
                 </Col>
                </Row>
            </Container>

           </Container>
        </div>
    )
}

export default About;