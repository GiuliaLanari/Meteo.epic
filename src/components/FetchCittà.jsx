// import { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FetchCittà = function (props) {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fechcity = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + props.città + "&appid=39e4200803c7b4ffeb5993e8fb481e49"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problemi nel caricamento");
        }
      })
      .then((meteoObj) => {
        setDetails(meteoObj);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("ERRORE", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fechcity();
  }, []);

  return (
    <>
      {isLoading === true && (
        <div className="d-flex justify-content-cente">
          <Spinner animation="border" variant="info" />
        </div>
      )}

      {details && details.clouds && (
        <Card className="text-center text-white ">
          <Card.Body className={props.img}>
            <Card.Title>{details.name}</Card.Title>
            <Card.Text>Clouds: {details.clouds.all} %</Card.Text>
            <Card.Text>Humidity: {details.main.humidity} %</Card.Text>
            <Card.Text>Temperature: {details.main.temp} °F</Card.Text>
            <Link to={"/meteo-details/" + props.città}>
              <Button className="bg-info">More info</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default FetchCittà;
