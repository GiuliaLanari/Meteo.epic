import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FetchCittà from "./FetchCittà";

const HomePage = function () {
  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="my-3 ">
          <FetchCittà città={"milano"} img={"bg-img1"} />
        </Col>
        <Col xs={12} md={8} className="my-3">
          <FetchCittà città={"roma"} img={"bg-img2"} />
        </Col>
        <Col xs={12} md={8} className="my-3">
          <FetchCittà città={"sicilia"} img={"bg-img3"} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
