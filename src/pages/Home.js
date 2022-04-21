import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
    return (
        <Container>
            <Row>
                <Col className="vh-100 d-flex flex-column justify-content-center">
                    <h1 className="display-1 pb-3">Salamu Alaikum</h1>
                    <span className="display-1 pb-5">✌️😊</span>
                    <h2 className="display-5">
                        Hi! This is my personal space where I share my latest information related to me or my craft.
                    </h2>
                    <p className="lead pt-5">Happy surfing</p>
                </Col>
                <Col className="" xl={4}></Col>
            </Row>
        </Container>
    )
}

export default Home;
