export default {
	Query: {
		hi() {
			return "Welcome to Quotient!"
	},
		users(){
			return [
		{
			_id: "asdf",
			login: "Bob",
			password: "1234a"
		},
		{
			_id: "erwasdf",
			login: "Stan",
			password: "42123"
		},
			];
		}
	}

};
