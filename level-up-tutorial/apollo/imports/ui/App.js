import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Navbare from './components/navbar.js'
import { withApollo } from 'react-apollo';
import CreateUserForm from './components/createUserForm'
import { Accounts } from "meteor/accounts-base";


import AccountForm from './components/CreateAccountForm';
import LoginForm from './components/LoginForm';
import About from './components/About';
import Categories from './components/categories';
import Footer from './components/Footer';
import QuoteList from './components/QuoteList';
import QuoteView from './components/QuoteView';
import InterpretationView from './components/InterpretationView'
import './components/cat.css';


// class App extends React.Component{
	const App = ({ loading, users, hi, client, currentuser }) => {
  // dataloading allows Apollo to change gears from loading to loaded
if(loading) return null;
return (
<div>
	<Navbare client={client} currentuser={currentuser} />
	<div className="negativeSpace">
	<div className="bodyContainer">
		<h1>Quotient: Communicate Better; Live Better</h1>
			<div>
				{!currentuser._id ? ( <About /> )
					: ( <Categories /> )
				}
				{/* <QuoteList /> */}
				{/* <QuoteView /> */}
				{/* <InterpretationView /> */}
			</div>
	</div>
	</div>
	<Footer />
</div>

)
}
{/* <ul>
	{users.map(user => (
		<li key={user._id}>
			{user.login}
		</li>
	))}
</ul> */}

const hiQuery = gql`
query Users {
	hi
	users {
    _id
    login
  }
  currentuser{
    _id
  }
}
`;

export default graphql(hiQuery, {
	props: ({data}) =>({...data})
})(withApollo(App));
