import { Mongo } from 'meteor/mongo'

const Users = new Mongo.Collection("quote_users");

export default Users
