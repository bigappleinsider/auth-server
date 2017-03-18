const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

const surveySchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  questionaire: { type: mongoose.Schema.Types.ObjectId, ref: 'Questionaire' },
  createdOn: { type: Date, default: Date.now },
  questions: [
    {
      questionText: { type: String, required: true },
      answer: { type: String, required: true }
    }
  ]
});
surveySchema.plugin(mongoosePaginate);
const ModelClass = mongoose.model('Survey', surveySchema);

module.exports = ModelClass;
