import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import profile from '../pics/profile.jpg';
import './head.css';
import {Link} from 'react-router-dom';
const Header=()=>{
    return(
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={cover}>
               <div className="cover1">
                <Navbar.Brand>
                    <img src={profile} alt=""width="50" height="50"></img>
                    <Link to="/" style={link}>Hello World!</Link>
                </Navbar.Brand>
                </div>
                <div className="cover2">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Link to="/skills" style={link}>Skills</Link>
                            <Link to="/projects" style={link}>Projects</Link>
                            <Link to="/about" style={link}>About</Link>
                            <Link to="/connect" style={link}>Connect</Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar> 
        </div>
    )
}
const cover={
    display: "flex",
    alignItems:"stretch",
    justifyContent:"space-between",
    backgroundColor:"#343a40",
    fontSize:"1.5rem",
    border:'1.5px dotted white'
}
const link={
    textDecoration:"none",
    
    marginRight:"10px"
}
export default Header;