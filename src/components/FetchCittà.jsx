// import { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FetchCittà = function (props) {
  const [details, setDetails] = useState({});

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
        console.log(meteoObj);
        setDetails(meteoObj);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  useEffect(() => {
    fechcity();
  }, []);

  return (
    <>
      {details && details.clouds && (
        <Card className="text-center text-white ">
          <Card.Body className={props.img}>
            <Card.Title>{details.name}</Card.Title>
            <Card.Text>Clouds: {details.clouds.all} %</Card.Text>
            <Card.Text>Humidity: {details.main.humidity} %</Card.Text>
            <Card.Text>Temperature: {details.main.temp} °F</Card.Text>
            <Link to={"/meteo-details-details/" + details.name}>
              <Button className="bg-info">More info</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default FetchCittà;
