import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = function () {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/">
            <div className="nav-link fw-bold text-white ">
              <img
                src={"logo.webp"}
                alt="logo"
                width="30"
                height="30"
                className="d-inline-block align-top me-2 rounded-circle"
              ></img>
              Meteo.epic
            </div>
          </Link>
          <Link to="/">
            <div className="nav-link fw-bold text-white ms-auto ">Home</div>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
