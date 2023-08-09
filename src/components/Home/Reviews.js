import { Container, Row, Col, Button } from "react-bootstrap";
import timg from "../../images/testimonial image.png";
import { AiFillStar } from 'react-icons/ai';
import Carousel from 'react-bootstrap/Carousel';


function Reviews() {
    return (
        <div>
            <Container fluid className="Review mt-5 mb-5 pt-3">
                <Container className="pb-5 minicont">
                    <Row className="pt-5 mt-3">
                        <Col lg='6' md='12' sm='12' xs='12' className="mb-3">
                            <span className="text-secondary about-head">CUSTOMER REVIEWS</span><div className="blueline mb-1 ms-2"></div>
                            <p className="about-head2 mt-2">What they are talking about us?</p>
                            <p className="about-des">There are many variations of passages.The majority have <br></br>suffered alterations
                                in some form of injected humour,<br></br> or randomised words believable</p>
                            <Button className='intro-btn px-4 py-3 mt-2'>All Testimonials</Button>
                        </Col>
                        <Col>
                            <Carousel>
                                <Carousel.Item>
                                    <div className="review-div">
                                        <div className="rating-div p-4 mt-3">
                                            <div className="text-primary"><AiFillStar />  <AiFillStar />  <AiFillStar />  <AiFillStar />  <AiFillStar /></div>
                                            <p className="review-line mt-2">
                                                Proin tempor lacus arcu. Nunc at elit condimentum,
                                                semper nisi et, condimentum mi.
                                                In venenatis blandit nibh at sollicitudin.
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-center mt-3">
                                            <img src={timg} alt="testimonial" className="testimonial"></img>
                                            <span className="mt-3 ms-2 Ceo-name">Christian Eve <p className="ceo">Founder and Ceo</p></span>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="review-div">
                                        <div className="rating-div p-4 mt-3">
                                            <div className="text-primary"><AiFillStar />  <AiFillStar />  <AiFillStar />  <AiFillStar />  <AiFillStar /></div>
                                            <p className="review-line mt-2">
                                                Proin tempor lacus arcu. Nunc at elit condimentum,
                                                semper nisi et, condimentum mi.
                                                In venenatis blandit nibh at sollicitudin.
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-center mt-3">
                                            <img src={timg} alt="testimonial" className="testimonial"></img>
                                            <span className="mt-3 ms-2 Ceo-name">Christian Eve <p className="ceo">Founder and Ceo</p></span>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </Container>

        </div>
    )
}

export default Reviews;