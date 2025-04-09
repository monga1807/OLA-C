import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        
          <Nav className="me-auto">
            <div className="first-3">
            <Navbar.Brand href="#home">OLA</Navbar.Brand>
          <NavDropdown title="Scooters" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              
            </NavDropdown>
            <NavDropdown title="MotorCycles" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
            
            </NavDropdown></div>
            <div className="last-4">
            <Nav.Link href="#home">Investor Relations</Nav.Link>
            <Nav.Link href="#link">Test Rider</Nav.Link>
            <Nav.Link href="#home" className="order">Order Now</Nav.Link>
            <Nav.Link href="#link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                </svg>
            </Nav.Link></div>
          </Nav>
        
      </Container>
    </Navbar>
  );
}

export default MyNav;