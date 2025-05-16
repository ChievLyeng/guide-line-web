import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaFeatherAlt, FaWindows, FaGoogle } from "react-icons/fa";

const NavbarMenu = ({ selected, setSelected }) => {
  return (
    <Navbar expand="lg" className="bg-primary navbar-dark mb-4">
      <Container>
        <Navbar.Brand href="#">📧 Email Setup Guide</Navbar.Brand>
        <Navbar.Toggle aria-controls="guide-navbar" />
        <Navbar.Collapse id="guide-navbar">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => setSelected("thunderbird")}
              active={selected === "thunderbird"}
            >
              <FaFeatherAlt className="me-2" />
              Thunderbird
            </Nav.Link>
            <Nav.Link
              onClick={() => setSelected("outlook")}
              active={selected === "outlook"}
            >
              <FaWindows className="me-2" />
              Outlook
            </Nav.Link>
            <Nav.Link
              onClick={() => setSelected("gmail")}
              active={selected === "gmail"}
            >
              <FaGoogle className="me-2" />
              Gmail
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
