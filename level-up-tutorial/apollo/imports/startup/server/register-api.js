import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
// merge allows multiple schema to be loaded together
import merge from 'lodash/merge';
// importing schema from another page
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'
// importing resolvers from another page
import ResolutionsResolvers from '../../api/resolutions/resolvers'
import UsersSchema from "../../api/users/Users.graphql"
import UsersResolvers from "../../api/users/resolvers.js"

//testSchema is pulling in our different individual queries....,
const testSchema = 	`
type Query {
	hi: String!
	users: [User]
	currentuser: currentuser
}
`
// simple test resolver to get a page heading
const testResolvers = {
	Query: {
		hi() {
			return "Here's a List of Users for Some Fucking Reason"
		}
	},
}

// resolvers pulls all my seperate resolvers together and merges them
const resolvers = merge(
	testResolvers,
	ResolutionsResolvers,
	UsersResolvers
)

// schema require type defs (which define the shape of our schema) and resolvers.  Guess which part this is......
const typeDefs = [
testSchema,
ResolutionsSchema,
UsersSchema
];

// This is creating out actual graphql schema
const schema = makeExecutableSchema({
	typeDefs,
	resolvers
})
// allow our app to have access to our schema
createApolloServer({ schema });
