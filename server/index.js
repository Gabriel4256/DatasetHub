var express = require('express');
var path = require('path');
var api = require('./routes');

var app = express();
const prodPort = 80
const devPort = 3000

// router for home page
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/api', api);

var resourceDirectory=""
if(process.env.NODE_ENV === 'development'){
    resourceDirectory = path.resolve(__dirname, './../frontend/public');
}
else{
    resourceDirectory = path.resolve(__dirname, './../frontend/dist');
}

app.use('/', express.static(resourceDirectory))

app.get('*', (req, res) => {
    
    res.sendFile(resourceDirectory + '/index.html');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

var portnum = prodPort
if(process.env.NODE_ENV === 'development'){
    portnum = devPort
}
app.listen(portnum, function() {
    console.log(`Listening on ${portnum}`);
});

