var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
    
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send("From the index.js file");
});

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT || 3000,function(req,res){
console.log("Server Started!!");
})
    
    