var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var cool = require('cool-ascii-faces');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'sumworldmyworld@gmail.com',
    pass: 'kinnock2013'
  }
});




app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.post('/submit', function(req, res) {
  console.log('SUBMITTING');
  console.log(req.body);
  res.redirect('/');
  
  var mailOptions = {
    from: 'Fred Foo ✔ <whenisayinput@raritea.com>', // sender address
    to: 'sumworldmyworld@gmail.com', // list of receivers
    subject: 'New Input On When I Say!', // Subject line
    text: "Adjective: " + req.body.adjective + " Noun: " + req.body.noun, // plaintext body
    html: '<b>Adjective: </b>' + req.body.adjective + ' <b>Noun: </b>' + req.body.noun // html body
  };
  
  console.log(mailOptions);
  
});

app.get('/', function(request, response) {
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    console.log('Mail callback');
      if(error){
          console.log(error);
      }else{
          console.log('Message sent: ' + info.response);
      }
  });
  
  response.sendFile(__dirname + '/public/main.html');
  
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
