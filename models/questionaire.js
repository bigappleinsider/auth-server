const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
/*
const question = new Schema({
  text: { type: String, required: true }
});
*/

const questionaireSchema = new Schema({
  name: { type: String, unique: true, required: true },
  questions: [{questionText: { type: String, required: true }}]
});
questionaireSchema.plugin(mongoosePaginate);

const ModelClass = mongoose.model('Questionaire', questionaireSchema);

module.exports = ModelClass;
