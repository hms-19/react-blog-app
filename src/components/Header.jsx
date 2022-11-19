import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
            <Navbar.Brand href="/">Webhub</Navbar.Brand>
            <Nav className="me-auto">
            <NavLink  className={({isActive}) => isActive ? 'mx-2 text-decoration-none text-primary' : 'mx-2 text-decoration-none text-light' } to='/'>
              Home
            </NavLink>
            <NavLink className={({isActive}) => isActive ? 'mx-2 text-decoration-none text-primary' : 'mx-2 text-decoration-none text-light' } to='add-blogs'>Add Blogs</NavLink>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header