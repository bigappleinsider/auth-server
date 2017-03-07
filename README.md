# Express js
[https://the-auth-server.herokuapp.com](https://the-auth-server.herokuapp.com)
[https://the-auth-client.herokuapp.com](https://the-auth-client.herokuapp.com)

## Environment variables
```
MONGODB_URI: YOUR_MONGO_CONNECTION
SECRET: YOUR_SECRET_SALT
```

```
npm i -S express mongoose morgan body-parser nodemon bcrypt-nodejs
npm i -S jwt-simple passport passport-jwt passport-local
```
nodemon restart server when files change

Add to package.json
```
"scripts": {
  "dev": "nodemon index.js"
},
```

## Install mongodb with brew
```
brew update
brew install mongodb
create data directory
sudo mkdir -p /data/db
To take over control of the directory we need to change ownership of the directory
sudo chown -R $USER /data/db
To startup mondo we run
mongod
```

## Robomongo - mongodb UI

## Routes
define routes that user can visit
req - object that represents incoming HTTP request
res - response object - we have ability to respond to user
next - error handling
```
app.get('/', function(req, res, next) {
  res.send(['dfgdfg', 'dfgdfg', 'df']);
});
```

### JWT token
[jwt.io](http://jwt.io)
