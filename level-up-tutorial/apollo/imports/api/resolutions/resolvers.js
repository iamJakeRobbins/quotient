import Users from "./resolutions";


// Users.remove({
//
// })


export default {
	Query: {
		users(obj, args, {userId}){
			return Users.find({
				userId
			}).fetch();
		}
	},

	Mutation: {
		createUser(obj, {login}, {userId}){
			console.log(login);
			const userID = Users.insert({
				login,
				userId
			})
			return Users.findOne(userID)
		}
	}
};
