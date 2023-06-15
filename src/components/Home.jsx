import './App1.css'
import {
    demo,demo2
} from './Home_data';
import{
    Container,
    Row,
    Col,
    Button,
    Modal,
    Form
} from "react-bootstrap";
import React,{useState} from "react";
import InboxPage from './InboxPage';
import { useNavigate } from 'react-router-dom';
const Home = ()=>{
    const navigate = useNavigate();
    const [before,after] = useState(false);
    const [pre,suc] = useState(false);
    const handleSignInSubmit = (e) => {
        e.preventDefault();
    
        // Perform sign-in logic here
    
        // Redirect to InboxPage upon successful sign-in
        navigate('/inbox');
      };
      const handleContactUsClick = () => {
        navigate('/contact');
      };
     const design =(
        <>
             <Container>
                 <div className="App">
                    <header className="App-header">
                        <img src={"https://ontwerpenmeer.nl/wp-content/uploads/2021/01/inboxify-logo.png"} className='App-logo'  alt="logo"/>
                        <button  className='button' onClick={()=>after(true)} >Sign in</button>

                        <button className='button' onClick={()=>suc(true)}>Create an Account</button>
                        <button className='button'  onClick={handleContactUsClick}>Contact Us</button>
                    </header>
                    
                </div>
                <Modal show={before} onHide={()=>after(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title><b>Sign in</b><br/>to continue with Inboxify.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <Form onSubmit={handleSignInSubmit}>
                                <Form.Group className='mb-4'>
                                     <Form.Label>Email</Form.Label>
                                     <Form.Control type="email" placeholder='Enter your mail id' name="email"/>
                                </Form.Group>
                                <Form.Group className='mb-4'>
                                     <Form.Label>Password</Form.Label>
                                     <Form.Control type="password" placeholder='Enter password' name="password"/>
                                </Form.Group>
                                <Button type="submit" variant='success'>Submit</Button>
                             </Form>
                             
                    </Modal.Body>
                </Modal>

                

                <Modal show={pre} onHide={()=>suc(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create your own Inboxify account.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <Form>
                                <Form.Group className='mb-4'>
                                     <Form.Label>First Name</Form.Label>
                                     <Form.Control type="text" placeholder='Enter your first name' name="fname"/>
                                </Form.Group>
                                <Form.Group className='mb-4'>
                                     <Form.Label>Last Name</Form.Label>
                                     <Form.Control type="text" placeholder='Enter your last name' name="lname"/>
                                </Form.Group>
                                <Form.Group className='mb-4'>
                                     <Form.Label>Date Of Birth</Form.Label>
                                     <Form.Control type="date" placeholder='Enter your DOB' name="dob"/>
                                </Form.Group>
                                <Form.Group className='mb-4'>
                                     <Form.Label>Mail ID</Form.Label>
                                     <Form.Control type="email" placeholder='Create your own mail id' name="mail"/>
                                </Form.Group>
                                <Form.Group className='mb-4'>
                                     <Form.Label>Password</Form.Label>
                                     <Form.Control type="password" placeholder='Create a strong password' name="pword"/>
                                </Form.Group>
                                <Form.Group className='mb-4'>
                                     <Form.Label>Confirm password</Form.Label>
                                     <Form.Control type="password" placeholder='Enter the password again' name="cword"/>
                                </Form.Group>
                                <Form.Group className='mb-4'>
                                     <Form.Label>Recovery Mail</Form.Label>
                                     <Form.Control type="email" placeholder='Enter a recovery email' name="rmail"/>
                                </Form.Group>
                                <Button type="submit" variant='success'>Submit</Button>
                            </Form>
                    </Modal.Body>
                </Modal>
             </Container>
        </>
    );
    return design;
}
export default Home;

