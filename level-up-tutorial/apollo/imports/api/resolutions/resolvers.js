import Users from "./resolutions";

Users.insert({
	login: "test res",
	password: "test pwd"
})


export default {
	Query: {
		users(){
			return Users.find({}).fetch();
		}
	}

};
