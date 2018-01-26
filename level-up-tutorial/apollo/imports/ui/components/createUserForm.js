import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createUser = gql`
	mutation createUser {
		createUser{
			_id
		}
	}
`;

class CreateUserForm extends Component {
	submitForm = () => {
		console.log(this.name.value)
		this.props.createUser()
	}

render(){
	return(
	<div>
		<input type="text" ref={input => (this.name = input)} />
		<button onClick={this.submitForm}> Submit </button>
	</div>
	)
}
}

export default graphql(createUser, {name: 'createUser'})(CreateUserForm)
