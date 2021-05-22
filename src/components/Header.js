import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import profile from '../pics/profile.jpg';
import './head.css';
import { Link ,animateScroll as scroll} from "react-scroll";
const Header=()=>{
    return(
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={cover}>
               <div className="cover1">
                <Navbar.Brand>
                    <img src={profile} alt=""width="50" height="50"></img>
                    <Link style={link} onClick={scroll.scrollToTop}  smooth={true} offset={-70} duration={1000}>Hello World!</Link>
                </Navbar.Brand>
                </div>
                <div className="cover2">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            
                            <Link style={link} to="skills" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
                            <Link style={link} to="projects" activeClass="active" spy={true}  smooth={true} offset={-70} duration={500}>Projects</Link>
                            <Link style={link} to="about" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                            <Link style={link} onClick={scroll.scrollToBottom} activeClass="active"  smooth={true} offset={-70} duration={1000}>Connect</Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar> 
        </div>
    )
}
const cover={
    display: "flex",
    alignItems:"flex-start",
    justifyContent:"space-between",
    flexWrap:"no-wrap",
    backgroundColor:"#343a40",
    fontSize:"1.5rem",
    border:'1.5px dotted white'
}
const link={
    textDecoration:"none",
    marginRight:"5px"
}
export default Header;