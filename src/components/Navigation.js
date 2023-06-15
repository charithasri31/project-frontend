import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navai.css';
import { faPencilSquare, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tabless from './Tabless';




function NavScrollExample() {
  return (

    <div>
      <Navbar sticky="top" bg="light" expand="lg" className='navbar'>
      <Container fluid>
        <Navbar.Brand href="#"> <img className='logo' src= {'https://ontwerpenmeer.nl/wp-content/uploads/2021/01/inboxify-logo.png'} alt='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className="search"></div>
            <input type="text" placeholder='search' />
            <Button variant="outline-success" >Search</Button>
            <div className="items">
            <botton> <FontAwesomeIcon className="user" icon={faPencilSquare}></FontAwesomeIcon> </botton>
            <Nav.Link className='Navlink' href="#">Inbox</Nav.Link>
            <Nav.Link className='Navlink' href="#">Starred</Nav.Link>
            <Nav.Link className='Navlink' href="#">Snoozed</Nav.Link>
            <Nav.Link className='Navlink' href="#">Sent</Nav.Link>
            <Nav.Link className='Navlink' href="./Contact">Draft</Nav.Link>
             <botton> <FontAwesomeIcon className="user" icon={faUserCircle}></FontAwesomeIcon> </botton>
            </div>
            
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Tabless/>

    </div>
    
    
   
  );
}
export default NavScrollExample;