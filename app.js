var express = require('express');
var app = express();

app.get('/', function(req, res) { 
    res.end('FreeCodeCamp API Projects: Request Header Parser Microservice\nProceed to /api/whoami');
});

app.get('/api/whoami', function(req, res) {  
  var ip = req.headers['x-forwarded-for'].split(/,/)[0];
  var lang = req.headers['accept-language'].split(/,/)[0];
  var os = req.headers['user-agent'].substring(req.headers['user-agent'].indexOf('(') + 1, req.headers['user-agent'].indexOf(')'));
  
  res.json({
    ipaddress : ip,
    language : lang,
    software : os
  });  
});
app.listen(process.env.PORT);