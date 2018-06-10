let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let SalesDataSchema = new mongoose.Schema({
	ProductId: {type: Number, required: true},
	SaleQty: {type: Number, required: true},
	SalesRev: {type: String, required: true, validate: {
		validator: function(num){
			if(num % 1 != 0){
				return true;
			}
			return false;
		}, message: "Revenue must be a decimal."
	}},
	UnitPrice: {type: String, required: true, validate: {
		validator: function(num){
			if(num % 1 != 0){
				return true;
			}
			return false;
		}, message: "Price must be a decimal."
	}},
}, {timestamps:true});
mongoose.model('SalesData', SalesDataSchema)