/**
@autho: Created by Hung.Pham on 2016/05/19
@des: Model for Feeback of App
*/

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var FeedbackLevelSchema = new Schema({
  level: Array,
  title: Object
});

module.exports = mongoose.model('feedbackLevel', FeedbackLevelSchema, 'feedbackLevel');
