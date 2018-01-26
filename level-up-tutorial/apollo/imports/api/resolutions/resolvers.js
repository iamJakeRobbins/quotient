import Users from "./resolutions";

// Users.insert({
// 	login: "Test",
// 	password: "master"
// })

Users.remove({

})


export default {
	Query: {
		users(){
			return Users.find({}).fetch();
		}
	}
};
