import "./Navbars.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbars = () => {
  return (
    <Navbar
      expand="lg"
      className="shadow-md"
      style={{ backgroundColor: "#EB7D26" }}
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          {/* <img src={Logo} alt="" width={50} height={50} /> */}
          <LazyLoadImage src={Logo} width={50} height={50} effect="blur" />
        </Navbar.Brand>
        <Navbar.Brand className="me-auto text-white fw-bold">
          Pancake Goyang
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border border-3 border-white text-white"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex">
            <div className="row m-0">
              <div className="col-12 col-lg-3 p-0 text-end">
                <Nav.Link as={Link} to="/" className="text-white">
                  <button className="nav-btn-home fw-medium">Home</button>
                </Nav.Link>
              </div>
              <div className="col-12 col-lg-3 p-0 text-end">
                <Nav.Link as={Link} to="/menu" className="text-white">
                  <button className="nav-btn-menu fw-medium">Menu</button>
                </Nav.Link>
              </div>
              <div className="col-12 col-lg-3 p-0 text-end">
                <Nav.Link as={Link} to="/about" className="text-white">
                  <button className="nav-btn-about fw-medium">About</button>
                </Nav.Link>
              </div>
              <div className="col-12 col-lg-3 p-0 text-end">
                <Nav.Link as={Link} to="/testimoni" className="text-white">
                  <button className="nav-btn-testimoni fw-medium">
                    Testimoni
                  </button>
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
