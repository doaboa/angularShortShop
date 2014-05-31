// create closure to put js in
(function() {

	//create module
	var app = angular.module('store', [ ]);

	//create controller that is attached to (inside) app
	app.controller('StoreController', function(){
		//create the product property of our controller and ref gem
		this.products = shorts;

	});

	//array of items that we can call in controllers
	var shorts = [
	{
		name: 'White and Blue Shorts',
		price: 12,
		description: 'Bleached white on top, high-waisted rockies with blue trim on the bottom.',
		canPurchase: true,
		images: [
			{
				front: 'short1.jpg',
				back: 'short1b.jpg'
			}
		]
	},
	{
		name: "Pink and Green Shorts",
		price: 10.95,
		description: 'A little pink, a little green, lots of nice blue in-between.  Low waist.',
		canPurchase: false,
		images: [
			{
				front: 'short2jpeg.jpeg',
				back: 'short2b.jpg'
			}
		]
	}

];
})();
