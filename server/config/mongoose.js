var mongoose = require('mongoose');
var fs = require('fs');
// require path for getting the models path
var path = require('path');
mongoose.connect('mongodb://ebergstein:argleoSc1!@productmastersalesdata-shard-00-00-oossr.mongodb.net:27017,productmastersalesdata-shard-00-01-oossr.mongodb.net:27017,productmastersalesdata-shard-00-02-oossr.mongodb.net:27017/test?ssl=true&replicaSet=ProductMasterSalesData-shard-0&authSource=admin&retryWrites=true/ProductMasterSalesData');
//mongoose.Promise = global.Promise;
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});