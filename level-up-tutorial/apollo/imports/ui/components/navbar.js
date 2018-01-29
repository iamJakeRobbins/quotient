import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Accounts } from "meteor/accounts-base";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import AccountForm from './CreateAccountForm';
import LoginForm from './LoginForm';
import './cat.css'

export default class Navbare extends Component {
	render(){
	return (
	<div>
	<Navbar className="header" inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Quotient Home</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
				{this.props.currentuser._id ? (<NavItem eventKey={1} onClick={() => {
							Meteor.logout()
							this.props.client.resetStore();
						}}>
						Logout
					</NavItem>
				)
					: (<NavDropdown eventKey={3} title="Login" id="basic-nav-dropdown">
						<LoginForm client={this.props.client}/>
					</NavDropdown>
				)
				}

				{!this.props.currentuser._id ? (<NavDropdown eventKey={1} title="Create Account" id="basic-nav-dropdown" onClick={() => {
						}}>
						<AccountForm />
					</NavDropdown>
				)
					: (<NavItem eventKey={3} title="Login" id="basic-nav-dropdown">
					</NavItem>
				)
				}
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
)
}
};

const hiQuery = gql`
query Users {
	hi
	users {
    _id
    login
  }

}
`;
