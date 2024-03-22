import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Card";

const HomePage = function () {
  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card className="text-center text-white">
            <Card.Body className="bg-img">
              <Card.Title>Nome della città</Card.Title>
              <Card.Text>Scopri che tempo fa..</Card.Text>
              <Button className="bg-info">More info</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
