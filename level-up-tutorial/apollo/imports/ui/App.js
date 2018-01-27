import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Navbare from './components/navbar.js'
import CreateUserForm from './components/createUserForm'

// class App extends React.Component{
	const App = ({loading, users}) => {
  // dataloading allows Apollo to change gears from loading to loaded
if(loading) return null

return (
	<div>
	<Navbare />
	<h1>{users.hi}</h1>
 		<ul>
      {users.map(user => (
        <li key={user._id}>
          {user.login}
        </li>
      ))}
    </ul>
	<CreateUserForm/>
</div>
)
}


const hiQuery = gql`
query Users {
	hi
	users {
    _id
    login
  }

}
`;

export default graphql(hiQuery, {
	props: ({data}) =>({...data})
})(App);
