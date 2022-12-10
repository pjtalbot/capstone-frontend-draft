import React, { useSate } from "react"
import { Link, NavLink, BrowserRouter, Route, Switch } from "react-router-dom"

import "./NavBar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
    return (
        
            <nav className="NavBar">
                
                    <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/profile">Profile</NavLink>
                <NavLink exact to="/explore">Explore</NavLink>
                <NavLink exact to="/search"></NavLink>
                <NavLink exact to="/signup">Sign Up</NavLink>
                <NavLink exact to="/search">Search</NavLink>

                

                
            </nav>
        
    )
}

export default NavBar