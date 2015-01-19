import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var store = this.store;
		var data = store.find('friend');
		console.log("this results =======", data);
		return data;
	}
});
