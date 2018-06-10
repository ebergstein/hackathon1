let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let MasterDataSchema = new mongoose.Schema({
	ProductId: {type: Number, required: true},
	UPC: {type: String, required: true, minlength: 12, maxlength: 14, validate: {
		validator: function(string){
			if(string.match(/^[0-9]+$/) != null){
				return true;
			}
			return false;
		}, message: "The UPC must be twelve digits."
	}},
	Title: {type: String, required: true},
	ArtistName: {type: String, required: true},
	RelDate: {type: Date, required: true},
}, {timestamps:true});
mongoose.model('MasterData', MasterDataSchema)