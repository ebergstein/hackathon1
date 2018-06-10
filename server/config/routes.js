let controller = require('./../controllers/controller');
module.exports = app => {
	app.post('/products/new', controller.addProduct);
	app.post('/products/delete', controller.deleteProduct);
	app.get('/products', controller.getProducts);
	app.get('/sales/:id', controller.getSales);
	app.post('/sales/new', controller.addSale);
	app.post('/sales/delete', controller.deleteSale);
}