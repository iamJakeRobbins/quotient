export default {
	Query: {
		currentuser(obj, args, {user}){
			return user || {};
		}
	}
}
