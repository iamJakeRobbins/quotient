import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


const App = ({data}) => {
  // dataloading allows Apollo to change gears from loading to loaded
if(data.loading) return null
return (  <div>
    <h1>{data.hi}</h1>
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
