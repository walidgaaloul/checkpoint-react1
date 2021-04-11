
import './App.css';
import { Form, Col, Button, Navbar, Nav, FormControl } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "./imag.jfif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
function App() {

  return (

    
    <div className="App-logo " style={{ backgroundImage: `url(${image}`}}>
      <div className="App" >

        <>
          <Navbar bg="light" variant="light" fixed="top">
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar>
        </>
        <div id="contact-container">
          <div className="contact-info">
            <h4>Contact Information</h4>
            <div className="icon-text">
              <FontAwesomeIcon icon={faPhone} /><span>+216 53 239 591</span>
            </div>

            <div className="icon-text">
              <FontAwesomeIcon icon={faEnvelope} /><span>walidsnake@gmail.com</span>
            </div>

           </div>
          <Form>
            <Form.Row >
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label style={{ color: "rgb(226, 238, 248)" }}>First Name</Form.Label>
                <Form.Control type="Name" placeholder="Enter name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label style={{ color: "rgb(226, 238, 248)" }}>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form.Row>

            <Form.Row >
            
              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label style={{ color: "rgb(226, 238, 248)" }}>Phone</Form.Label>
                <Form.Control type="phone" placeholder="phone" />
              </Form.Group>
            
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label style={{ color: "rgb(226, 238, 248)" }}>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>sousse</option>
                <option>tunis</option>
              </Form.Control>
            </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label style={{ color: "rgb(226, 238, 248)" }}>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group id="formGridCheckbox">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{ color: "rgb(226, 238, 248)" }}>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

            </Form.Group>


            <Button variant="primary" type="submit">
              Submit
        </Button>
          </Form></div></div></div>
  );
}

export default App;
