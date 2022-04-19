import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <Row>
                <Col className="vh-100 d-flex flex-column justify-content-center">
                    <h1 class="display-1 pb-3">Hi ✌️😊</h1>
                    <h2 class="display-5">
                        This is my personal space where I share my latest information related to me or my craft.
                    </h2>
                    <p className="lead pt-5">Happy surfing</p>
                </Col>
                <Col className="" lg={4}></Col>
            </Row>
        </Container>
    )
}

export default Home;
