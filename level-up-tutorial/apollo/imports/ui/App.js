import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Navbare from './components/navbar.js'

// class App extends React.Component{
	const App = ({data}) => {
  // dataloading allows Apollo to change gears from loading to loaded
if(data.loading) return null
return (
	<div>
	<Navbare />
	<h1>Welcome to the Site</h1>
 		<ul>
      {data.users.map(user => (
        <li key={user._id}>
          {user.login}
        </li>
      ))}
    </ul>
</div>
)
}


const hiQuery = gql`
{
	hi

  users {
    _id
    login
		password
  }

}
`;

export default graphql(
	hiQuery
)(App);
