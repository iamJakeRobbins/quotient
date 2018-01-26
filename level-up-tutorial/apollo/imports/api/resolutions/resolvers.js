import Users from "./resolutions";


// Users.remove({
//
// })


export default {
	Query: {
		users(){
			return Users.find({}).fetch();
		}
	},

	Mutation: {
		createUser(){
			console.log("got here");
			// const userID = Users.insert({
			// 	login: "Test",
			// 	password: "master"
			// })
		}
	}
};
