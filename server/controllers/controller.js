var mongoose = require('mongoose');
var Product = mongoose.model('MasterData')
var Sale = mongoose.model('SalesData')
module.exports = {
	
	getProducts: (req, res) => {
		Product.find({}).exec((err, products)=>{
			if(err){
				//console.log(err);
				let errors = "";
				for (let i in err.errors){
					errors+=err.errors[i].message + ",";
				}
				return res.status(500).send(errors)
			}
			else{
				return res.json(products);
			}
		})
	},
	
	getSales: (req, res) => {
		console.log(req.params);
		Sale.findOne({ProductId: req.params.id}, (err, sale)=>{
			if(err){
				//console.log(err);
				let errors = "";
				for (let i in err.errors){
					errors+=err.errors[i].message + ",";
				}
				return res.status(500).send(errors)
			}
			else{
				return res.json(sale);
			}
		})
	},
	
	addProduct: (req, res) => {
		Product.findOne({ProductId: req.body.ProductId}, (err, product) =>{
			if(err){
				//console.log(err);
				let errors = "";
				for (let i in err.errors){
					errors+=err.errors[i].message + ",";
				}
				return res.status(500).send(errors);
			}
			else if(product == null){
				//console.log("here");
				delete req.body.SaleQty;
				delete req.body.SaleRev;
				delete req.body.UnitPrice;
				//console.log("here");
				console.log(req.body);
				let newProduct = new Product(req.body);
				console.log(newProduct);
				newProduct.save( (err, savedProduct) => {
					//console.log("save");
					console.log(err);
					if(err){
						//console.log("bad");
						//console.log(err);
						let errors = "";
						for (let i in err.errors){
							errors+=err.errors[i].message + ",";
						}
						return res.status(500).send(errors);
					}
					else{
						return res.json(savedProduct);
					}
				})
			}
			else{
				let errors = "Product Id in use.";
				return res.status(500).send(errors);
			}
		})
	},
	
	addSale: (req, res) => {
		delete req.body.Title;
		delete req.body.UPC;
		delete req.body.ArtistName;
		delete req.body.RelDate;
		let newSale = new Sale(req.body);
		newSale.save( (err, savedSale) => {
			//console.log("save");
			console.log(err);
			if(err){
				//console.log("bad");
				//console.log(err);
				let errors = "";
				for (let i in err.errors){
					errors+=err.errors[i].message + ",";
				}
				return res.status(500).send(errors);
			}
			else{
				return res.json(savedSale);
			}
		})
	},
	
	deleteProduct: (req, res) => {
		//console.log(req.body);
		Product.remove({ProductId: req.body.id}, (err, data) =>{
			console.log(data);
			if(err){
				console.log(err);
				let errors = "";
				for (let i in err.errors){
					errors+=err.errors[i].message + ",";
				}
				return res.status(500).send(errors);
			}
			else{
				return res.json(data);
			}
		})
	},
	
	deleteSale: (req, res) => {
		Sale.remove({ProductId: req.body.id}, (err, data) =>{
			if(err){
				console.log(err);
				let errors = "";
				for (let i in err.errors){
					errors+=err.errors[i].message + ",";
				}
				return res.status(500).send(errors);
			}
			else{
				return res.json(data);
			}
		})
	},
	
}