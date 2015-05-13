Router.configure({
	layoutTemplate: 'appLayout'

})

Router.route('/', function() {
	this.renter('Home', {
		data: function() {return true}
	})
})