import React from 'react'
import * as bs from 'react-bootstrap'
import SiteIcon from './media/favicon-32x32.png'


function HeaderContainer(props) {

    return (
        <bs.Navbar bg="primary" expand="lg" style={{color: 'black'}} >
            <bs.Navbar.Brand href="/home/">
                <img alt="Site Icon" src={SiteIcon} />
                {'    '}COVID-19 Campaigns
            </bs.Navbar.Brand>
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <bs.Navbar.Collapse id="basic-navbar-nav">
                <bs.Nav className="mr-auto">
            
                </bs.Nav>
                <bs.Nav.Link style={{color: 'black', opacity: '.5'}} href="/prediction/">Predict Campaign Success</bs.Nav.Link>
                <bs.Nav.Link style={{color: 'black', opacity: '.5'}} href="/home/">Campaign Search</bs.Nav.Link>
                <bs.Nav style={{color: 'black'}}>
                    <bs.NavDropdown style={{color: 'black'}} title="Welcome, New User" alignRight id="basic-nav-dropdown">
                        <bs.NavDropdown.Item style={{color: 'black'}} href="/home/">My Account</bs.NavDropdown.Item>
                        <bs.NavDropdown.Divider />
                        <bs.NavDropdown.Item href="/login/">Logout</bs.NavDropdown.Item>
                    </bs.NavDropdown>
                </bs.Nav>
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}


export default HeaderContainer