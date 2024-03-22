import Col from "react-bootstrap/Col";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const Details = function (props) {
  const params = useParams();
  const navigate = useNavigate();
  const [meteo, setMeteo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fechcity = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        params.meteoName +
        "&appid=39e4200803c7b4ffeb5993e8fb481e49"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problemi nel caricamento");
        }
      })
      .then((meteoObj) => {
        setMeteo(meteoObj);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("ERRORE", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fechcity();
  }, [params.meteoName]);

  return (
    <>
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="my-3">
            {isLoading === true && (
              <div className="d-flex justify-content-cente">
                <Spinner animation="border" variant="info" />
              </div>
            )}
            {meteo && meteo.clouds && (
              <>
                <Card className="text-center text-black  ">
                  <Card.Body>
                    <Card.Title>{meteo.name}</Card.Title>
                    <Card.Text>Clouds: {meteo.clouds.all} %</Card.Text>
                    <Card.Text>Humidity: {meteo.main.humidity} %</Card.Text>
                    <Card.Text>Temperature: {meteo.main.temp} °F</Card.Text>
                    <Card.Text>Weather: {meteo.weather[0].description} </Card.Text>
                  </Card.Body>
                </Card>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Details;
