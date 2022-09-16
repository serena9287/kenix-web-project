import "./../index.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar {...args} color='dark' dark expand='md' container='md'>
      <NavbarBrand href='/'>KC</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='me-auto' navbar>
          <NavItem>
            <NavLink href='/'>HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/about/'>ABOUT</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/award/'>AWARDS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/lessons/'>LESSONS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/contact/'>CONTACT</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Example;
