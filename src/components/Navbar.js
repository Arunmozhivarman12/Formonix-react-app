import { Container, Stack } from "react-bootstrap"
import call from "./../images/Call.png"
import mail from "./../images/Mail.png"
import fb from "./../images/FB.png"
import insta from "./../images/INSTA.png"
import twitter from "./../images/TWITTER.png"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "./../images/Lobgo.png"
import { Link } from "react-router-dom"
function Header() {
    return (
        <div>
            <Container fluid className="top-nav">
                <Container className="p-3 minicont">
                    <Stack direction="horizontal">
                        <div>
                            <img src={call} className="nav-icon" alt="call"/>
                            <span className="text-light ms-2 nav-info">+91 9876543210</span>
                            <div className="cbar ms-3 me-3"></div>
                            <img src={mail} className="nav-icon" alt="mail"></img>
                            <span className="ms-2 text-light nav-info">example@gmail.com</span>
                        </div>
                        <div className="ms-auto text-light nav-info">
                           <a href="facebook"><img src={fb} className="nav-icon" alt="facebook"></img></a> 
                           <a href="insta"><img src={insta} className="ms-2 nav-icon" alt="insta"></img></a> 
                           <a href="twitter"><img src={twitter} className="ms-3 nav-icon" alt="twitter"></img></a> 
                        </div>
                    </Stack>
                </Container>
            </Container>
            <Container fluid className="">
                <Container className="p-2 minicont">
                <Navbar expand="lg" className="py-2">
      <Container className="px-0">
        <img src={logo} alt="logo" className="logo pb-1"></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" ><GiHamburgerMenu/></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="ms-auto mt-2">
           <Link to={'/'} className="me-5 mb-2 mt-1 route">Home</Link>
            <Link  to={'/Aboutus'} className="me-4 mb-2 mt-1 route">About Us</Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" className="me-4 mt-1 pb-0">
              <Link className="d-block ps-2 pb-2" to={"/Personalloan"}>Personal Loan</Link>
              <Link className="d-block ps-2 pb-2" to={"/Homeloan"}>Home Loan</Link>
              <Link className="d-block ps-2 pb-2" to={"/Businessloan"}>Business Loan</Link>
              <Link className="d-block ps-2 pb-2" to={"/Generalinsurance"}>General Insurance</Link>
              <Link className="d-block ps-2 pb-2" to={"/Lifeinsurance"}>Life Insurance</Link>
              <Link className="d-block ps-2 pb-2" to={"/Mutualfund"}>Mutual Funds</Link>
            </NavDropdown>
            <Link to={'/Partners'} className="me-4 mb-2 mt-1 route">Partners</Link>
            <Link to={'/Contactus'}  className="me-4 mb-2 mt-1 route">Contact Us</Link>
          </Nav>
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
                </Container>
            </Container>

        </div>
    )
}

export default Header;