const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

let exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let routes =require('./controllers/burgerscontroller');

app.use(routes);
app.listen(PORT,function(){
    console.log("Server listening on: http://localhost:" + PORT);
});