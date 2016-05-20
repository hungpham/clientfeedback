/**
@autho: Created by Hung.Pham on 2016/05/19
@des: Model for Index of App
*/

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ConfigSchema = new Schema({
  cashier: Array,
  store: String,
  key: String
});



module.exports = mongoose.model('config', ConfigSchema, 'config');