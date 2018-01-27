import Users from "./resolutions";


// Users.remove({
//
// })


export default {
	Query: {
		users(obk, args, {userId}){
			console.log(userId);
			return Users.find({}).fetch();
		}
	},

	Mutation: {
		createUser(obj, {login}, context){
			console.log(login);
			const userID = Users.insert({
				login
			})
			return Users.findOne(userID)
		}
	}
};
