const express = require("express");
const bodyparser = require("body-parser");
const session = require('express-session');
const {v4:uuid4} = require('uuid');
const path = require('path');
const router = require('./router');
const app = express();



const port = process.env.PORT || 3000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.use(session({
    secret:'uuidv4()',
    resave:false,
    saveUninitialized:true
}));

app.use('/route',router);

app.set('view engine','ejs');

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))



app.get('/',(req, res)=>{
    res.render('base',{title:"login system"});
}
)
app.listen(port,()=>{console.log("listening to the server on http://localhost:3000")});