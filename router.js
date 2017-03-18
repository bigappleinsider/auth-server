const Authentication = require('./controllers/authentication');
const Questionaire = require('./controllers/questionaire');
const Survey = require('./controllers/survey');


const passportService = require('./services/passport');
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app){
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'Super secret code is Apple123' });
  });

  app.get('/questionaire/:id?', requireAuth, Questionaire.get);
  app.post('/questionaire', requireAuth, Questionaire.create);
  app.patch('/questionaire/:id', requireAuth, Questionaire.update);
  app.delete('/questionaire/:id', requireAuth, Questionaire.delete);

  app.get('/survey/:id', requireAuth, Survey.get);
  app.post('/survey/:id', requireAuth, Survey.create);


  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

}
