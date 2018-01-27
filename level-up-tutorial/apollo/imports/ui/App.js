import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Navbare from './components/navbar.js'
import { withApollo } from 'react-apollo';
import CreateUserForm from './components/createUserForm'
import { Accounts } from "meteor/accounts-base";
import AccountForm from './components/CreateAccountForm';
import LoginForm from './components/LoginForm';



// class App extends React.Component{
	const App = ({ loading, users, hi, client }) => {
  // dataloading allows Apollo to change gears from loading to loaded
if(loading) return null

return (
	<div>
	<Navbare />
	<h1>{hi.hi}</h1>
		<AccountForm client={client} />
		<CreateUserForm client={client} />
 		<ul>
      {users.map(user => (
        <li key={user._id}>
          {user.login}
        </li>
      ))}
    </ul>
	<LoginForm client={client} />
<button onClick={() => {
	Meteor.logout();
	client.resetStore()
	}}
>
		Logout Bitch
</button>
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
})(withApollo(App));
