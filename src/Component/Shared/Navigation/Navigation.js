import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css';


const Navigation = () => {

    const { user, logOut } = useAuth();
    const handleLogout = () => {
        logOut()
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/"><img className="img-fluid py-3 me-5" width="268px" src="https://i.ibb.co/rxPYQZB/New-Project-2.png" alt="" /></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Link className="me-4 text-decoration-none text-light" to='/home'>Home</Link>
                        <Link className="me-4 text-decoration-none text-light" to='/explore_product'>Explore Bicycle</Link>
                        
                        {
                            user?.email && <Link className="text-decoration-none text-light" to='/dashboard'>Dashboard</Link>
                        }
                    </Nav>
                    <Nav>
                        {
                            user?.email ? <div className="d-flex align-items-center"><span className=" text-light me-5 text-decoration-none user-name ">{user?.displayName}</span><a onClick={handleLogout} className="text-decoration-none  text-light logout-btn  " >Logout</a></div> :
                                <Link className="text-decoration-none login-btn text-light nav-link " to="/login">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;