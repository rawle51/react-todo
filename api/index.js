var express = require('express');
var app = express();

app.get('/', (_, res) => res.send('Hi express'));

app.listen(5000);
