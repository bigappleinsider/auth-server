const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
const question = new Schema({
  text: { type: String, required: true }
});
*/

const questionaireSchema = new Schema({
  name: { type: String, unique: true, required: true },
  questions: [{text: { type: String, required: true }}]
});

const ModelClass = mongoose.model('questionaire', questionaireSchema);

module.exports = ModelClass;
