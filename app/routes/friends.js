import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		save: function() {
			console.log('+-- save action bubbled up to friends new route');
			return true;
		},
		cancel: function() {
			console.log('+-- cancel action bubbled up to friends new route');
			return true;
		},
		delete: function(friend) {
			friend.destroyRecord();
			return false; 
		}
	},

	model: function() {
		var store = this.store;
		var data = store.find('friend');
		console.log("this results =======", data);
		return data;
	}

});
