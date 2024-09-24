import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';
import { Form, Button, Container, InputGroup } from 'react-bootstrap';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../Assets/nobackgroundlogo.png';
import gif from '../Assets/login.gif';

const SignIn = () => {
  const navigate = useNavigate();
  const [showpassword, setshowpassword ] = useState(false);

  const handleSignIn = () => {
    navigate('/home');
  };

  const togglevisible = () => {
    setshowpassword(!showpassword);
  }

  return (
    <div className='outside'>
        <Container className='container' style={{ maxWidth: '900px', margin: '40px auto', height: '550px' }}>
            <div className='left'>
                <div className='imageContainer'>
                    <img src={gif} alt="Startboom Digital Academy" />
                </div>
                <div className='textContainer'>
                    <h2>Market and earn money</h2>
                    <p>Grow your skills will studing with us.</p>
                    <p>Our marketing plan helps you earn as you help other people join the digital economy.</p>
                </div>
            </div>
            <div className='right'>
                <div className='logoContainer'>
                    <img src={logo} alt="Startboom Digital Academy Logo" className='logo'/>
                </div>
                <h1 style={{textAlign: 'center'}}>Welcome to Startboom Digital Academy</h1>
                <Form className='customForm'>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email/ Username</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                        <FaUser />
                        </InputGroup.Text>
                        <Form.Control type="email" placeholder="Enter email or username" />
                    </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" style={{ paddingTop: '15px'}}>
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                                <FaLock />
                            </InputGroup.Text>
                            <Form.Control
                                type={showpassword ? 'text' : 'password'}
                                placeholder="Please enter your password"
                            />
                            <InputGroup.Text onClick={togglevisible} style={{ cursor: 'pointer' }}>
                            {showpassword ? <FaEyeSlash /> : <FaEye />}
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>

                    <Link className='forgotPassword'>Forgot password?</Link>
                    <Button className="custom-button" onClick={handleSignIn}>
                        Sign In →
                    </Button>
                </Form>
            </div>
        </Container>
    </div>
  );
};

export default SignIn;
