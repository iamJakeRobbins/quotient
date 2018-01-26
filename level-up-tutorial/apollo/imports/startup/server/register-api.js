import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
// merge allows multiple schema to be loaded together
import merge from 'lodash/merge';
// importing schema from another page
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'
// importing resolvers from another page
import ResolutionsResolvers from '../../api/resolutions/resolvers'

//testSchema is pulling in our different individual queries 
const testSchema = 	`
type Query {
	hi: String!
	users: [User]
}
`
// simple test resolver to get a page heading
const testResolvers = {
	Query: {
		hi() {
			return "Welcome to Quotient!"
		}
	},
}

const resolvers = merge(
	testResolvers,
	ResolutionsResolvers,
)

const typeDefs = [
testSchema,
ResolutionsSchema
];


const schema = makeExecutableSchema({
	typeDefs,
	resolvers
})

createApolloServer({ schema });
