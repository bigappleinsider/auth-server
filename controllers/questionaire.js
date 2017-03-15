const Questionaire = require('../models/questionaire');

exports.get = function(req, res, next) {
  /*
  numPerPage
  pageNum
  */
  if(req.params.id){
    Questionaire
      .findById(req.params.id, function(err, item) {
        if(err) { return next(err); }
        res.json(item);
      });
  }
  else{
    Questionaire
      .find()
      .limit(10)
      .exec(function(err, items) {
        if(err) { return next(err); }
        res.json(items);
      });
  }
};

exports.create = function(req, res, next) {
    Questionaire.create({
      name: req.body.name,
      questions: req.body.questions
    }, function(err, questionaire) {
      if(err) { return next(err); }
      res.json(questionaire);
    });
};

exports.update = function(req, res, next) {
  Questionaire
    .findById(req.params.id, function(err, item) {
      if(err) { return next(err); }
      item.name = req.body.name;
      item.questions = req.body.questions;

      item.save(function(err, item) {
        if(err) { return next(err); }
        res.json(item);
      });
    });

};

exports.delete = function(req, res, next) {
  Questionaire
    .findByIdAndRemove(req.params.id, function(err, item) {
      if(err) { return next(err); }
      res.json(item);
    });

};
