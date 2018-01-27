import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createUser = gql`
	mutation createUser($login: String!) {
		createUser(login: $login){
			_id
		}
	}
`;

class CreateUserForm extends Component {
	submitForm = () => {
		this.props.createUser({
			variables: {
				login: this.login.value
			}
		})
	}

	render(){
		return(
		<div>
			<input type="text" ref={input => (this.login = input)} />
			<button onClick={this.submitForm}> Create Account </button>
		</div>
		)
	}
}

export default graphql(createUser, {
	name: 'createUser',
options: {
	refetchQueries: ["Users"]
}
})(CreateUserForm)
