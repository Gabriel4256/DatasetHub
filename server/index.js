var express = require('express');
var path = require('path');
var api = require('./routes');

var app = express();
const portnum = 3000

// router for home page
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/index.html`));
});


app.listen(portnum, function() {
    console.log(`Listening on ${portnum}`);
});

