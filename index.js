var express = require('express');

var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const nodemailer = require('nodemailer');


app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.post('/about', urlencodedParser, function (req, res) {
	if (!req.body) return res.sendStatus(400);
	console.log(req.body);
	res.render('about-success', {data: req.body});
	/*var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'rasul.hasen@gmail.com',
            pass: '751626Vkr969798230091ras'
        },
        tls: {
        	rejectUnauthorized: false
        }
    });

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: "<rasul.hasen@gmail.com>", // sender address
	    to: "rassul.khassen@nu.edu.kz", // list of receivers
	    subject: "Hello ✔", // Subject line
	    text: "Hello world ✔", // plaintext body
	    html: "<b>Hello world ✔</b>" // html body
	}

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, response){
	    if(error){
	        console.log(error);
	    }else{
	        console.log("Message sent: " + response.message);
	    }
	});
	*/
})

app.get('/news/:id', function(req, res) {
	var obj = {title: "New", id:4, paragraphs: ['Par', 'Plain', 'Numbers: 134 234 2', 99]};
	//console.log(req.query);
	res.render('news', {newsId: req.params.id, obj:obj});
})

app.listen(3000);