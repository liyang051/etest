import DS from 'ember-data';
import Ember from 'ember';

export default DS.ActiveModelAdapter.extend({
	namespace: 'api',
	host: 'http://192.168.1.141:8081',
	pathForType: function(type) {
		return Ember.String.underscore(type);
	}
});
