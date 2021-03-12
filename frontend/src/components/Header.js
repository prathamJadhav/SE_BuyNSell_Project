import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'

import { Container,Nav,Navbar} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>

                <Container>
                  <LinkContainer to='/'>
                  <Navbar.Brand >BPHC Buy and Sell Portal</Navbar.Brand>

                  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
