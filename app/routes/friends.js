import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var store = this.store;
		var data = store.find('friends');
		console.log("this results =======", data);
	}
});
