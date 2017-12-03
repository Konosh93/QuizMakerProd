var express = require('express'),
	port = process.env.PORT || 3001,
 	passport = require('passport'),
 	bodyParser = require('body-parser'),
 	morgan = require('morgan'),
 	cors = require('cors'),
 	mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});

var app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.get('/', function(req,res,next){
  
})

require('./app/config/passport.js');

/* historyFallBack to serve index.html in case of refresh
app.get('/*', (req, res) => {
	res.sendFile('../fe/server/index.html');
})
*/
app.use('/api', require('./app/routes/api'));

if(!module.parent){ 
	app.listen(port, () => {
		console.log('	Listening at port ' + port);
	})
}

module.exports = app;


function logger (data) {
	console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
	console.log(data);
	console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
}