
import './App.css';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Gallery } from './componenets/Gallery';
import { Contact } from './componenets/Contact';
import { Weather } from './componenets/Weather';
import { Action2 } from './componenets/Action2';
import { Action3 } from './componenets/Action3';
import { Action4 } from './componenets/Action4';
import { Home } from './componenets/Home';
import Footer from './componenets/Footer';


function App() {
  return (
    <BrowserRouter>

    <div className="App">
      
     <Navbar bg="light" expand="lg">
 <Container>
    <Navbar.Brand href="#home">Alaa Project</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as ={Link} to="/">Home</Nav.Link>
        <Nav.Link as ={Link} to="/gallery">Gallery</Nav.Link>
        <Nav.Link as ={Link} to="/weather">Weather</Nav.Link>
        <Nav.Link as ={Link} to="/contact">Contact</Nav.Link>
        
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item as ={Link} to="/action2">Action 2</NavDropdown.Item>
          <NavDropdown.Item as ={Link} to="/action3">Action3</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as ={Link} to="/action4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        <Route path="/action2" element={<Action2/>}/>
        <Route path="/action3" element={<Action3/>}/>
        <Route path="/action4" element={<Action4/>}/>
      </Routes>
      <Footer/>
    </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
