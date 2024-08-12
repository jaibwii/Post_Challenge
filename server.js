const express = require('express');
const app = express();

app.use(express.static('Public'))
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/' + 'index.html');
})

app.get('/about', function(req,res) {
    res.sendFile(process.cwd()+ '/about.html');
})

app.get('/blog', function(req,res) {
    res.sendFile(process.cwd() + '/blog.html');
})

app.get('/contact', function(req,res) {
    res.sendFile(process.cwd() + '/contact.html');
})

app.post('/process_post',urlencodedParser, function (req,res) {
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        gender:req.body.gender,
        year:req.body.year,
        student_number:req.body.student_number,
        email:req.body.email,
        yourself:req.body.yourself
    };

console.log(response);
res.end(JSON.stringify(response));
});

app.listen(3005, () => {
    console.log('Server is running on http://localhost:3005');
});