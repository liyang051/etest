import Ember from 'ember';

export default Ember.Controller.extend({
	isValid: Ember.computed(
		'model.email',
		'model.firstName',
		'model.lastName',
		'model.twitter',
		function() {
			console.log("=====", !Ember.isEmpty(this.get('model.email')), 
				!Ember.isEmpty(this.get('model.firstName')),
				!Ember.isEmpty(this.get('model.lastName')),
				!Ember.isEmpty(this.get('model.twitter')));
			return !Ember.isEmpty(this.get('model.email')) &&
					!Ember.isEmpty(this.get('model.firstName')) &&
					!Ember.isEmpty(this.get('model.lastName')) &&
					!Ember.isEmpty(this.get('model.twitter'));
		}
	),
	actions: {
		save: function() {
			if (this.get('isValid')) {
				var _this = this;
				console.log('is valid?');
				this.get('model').save().then(function(friend) {
					_this.transitionToRoute('friends.show', friend);
				});
			} else {
				this.set('errorMessage', 'you hava to fill all the fields');
			}
			console.log('+- save action in friends new controller');
			return false;
		},

		cancel: function() {
			console.log('+- cancel action in friends new controller');
			this.transitionToRoute('friends');
			return false;
		}
	}
});
