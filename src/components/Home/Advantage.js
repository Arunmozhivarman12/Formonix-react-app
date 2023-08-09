import { Container, Row, Col, Button} from "react-bootstrap";
import ploan from "../../images/Personal Loan.png"
import Hloan from "../../images/Home oan.png"
import { BsArrowRight } from "react-icons/bs";


function Advantage(){
    return(
        <div>
         <Container fluid className="adv-cont">
<Container className="text-center pt-5 pb-5">
<span className="text-secondary about-head ">WHAT WE'RE OFFERING</span><div className="blueline mb-1 ms-2"></div>
<p className="about-head2 mt-2">Multiple Advantages. One Platform.</p>
<Row className="justify-content-center mt-4">
    <Col className="mb-3" lg='4'>
    <div className="ploan-div">
        
        <img className="w-100 loan-div" src={ploan} alt="ploan"></img>
        <p className="mt-3 info-head">Personal Loan</p>
        <p className="about-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                 incididunt ut labore et dolore magna aliqua.</p>
                 <Button className="read-btn mb-3 ps-4 pe-0">Read More<span className="arr-btn mb-3 ms-4 py-2 px-2"><BsArrowRight/></span></Button>

    </div>
    </Col>
    <Col lg='4'>
    <div className="ploan-div">
        
        <img className="w-100 loan-div" src={Hloan} alt="ploan"></img>
        <p className="mt-3 info-head">Home Loan</p>
        <p className="about-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                 incididunt ut labore et dolore magna aliqua.</p>
                 <Button className="read-btn mb-3 ps-4 pe-0">Read More<span className="arr-btn mb-3 ms-4 py-2 px-2"><BsArrowRight/></span></Button>
    </div>

    </Col>
</Row>
</Container>
         </Container>
        </div>
    )
}

export default Advantage;