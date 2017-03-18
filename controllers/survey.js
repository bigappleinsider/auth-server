const Survey = require('../models/survey');

exports.get = function(req, res, next) {
  if (req.params.id) {
    Survey.findOne({ questionaire: req.params.id })
    .populate('questionaire', 'name')
    .exec(function(err, item) {
      if (err) { return next(err); }
      res.json(item);
    });
  }
};

exports.create = function(req, res, next) {
  Survey.create({
    user: req.user._id,
    questionaire: req.params.id,
    questions: req.body.questions
  }, function(err, item) {
    if (err) { return next(err); }
    res.json(item);
  });
};
