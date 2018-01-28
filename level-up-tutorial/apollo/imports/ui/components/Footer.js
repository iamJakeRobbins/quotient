import React, { Component }from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './cat.css';

export default class Footer extends Component{
	render(){
		return(
<Navbar className="footer" inverse collapseOnSelect>
<Navbar.Header>
	<Navbar.Brand>
	</Navbar.Brand>
	<Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse>
	<Nav pullRight>
	</Nav>
</Navbar.Collapse>
</Navbar>
)
}
}
