var express = require('express');
var crypto = require('crypto');

var app = express();
var port = 3000;

app.get('/', function (req, res) {
    res.sendStatus(200);
});

app.get('/:plainText', function (req, res) {
    var md5sum = crypto.createHash('md5');
    md5sum.update(req.params.plainText);
    
    var d = md5sum.digest('hex');
      
    res.json({md5:d});
});

app.listen(port, function () {
    console.log('App listening on port ' + port);
});