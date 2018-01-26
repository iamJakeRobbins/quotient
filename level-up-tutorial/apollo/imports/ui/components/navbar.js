import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navbare extends Component {
	render(){
	return (
	<div>
	<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Quotient Home</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        About
      </NavItem>
      <NavItem eventKey={2} href="#">
        Login
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Your Home
      </NavItem>
      <NavItem eventKey={2} href="#">
				LogOut
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
)
}
};

export default Navbare
