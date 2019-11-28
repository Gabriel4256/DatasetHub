var express = require ('express')
var app = express ()

var path = require ('path')
app.use (express.static (path.join (__dirname, './public')))

app.engine ('html', require ('ejs').renderFile)
app.set ('view engine', 'html')

app.get ('/', function (req,res) {
    res.render ('./index.html')
})

app.listen (3000, function () {
    console.log ('express server started')
})