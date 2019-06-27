const express = require('express');
const app = express();
const port = process.env.port || 5000;

// Serving static file
app.use(express.static(__dirname+'/public'));
// Path of views
app.set('views', './src/views');
// Template engine
app.set('view engine','ejs');

app.get('/', (req,res) => {
    res.status(200).send('hi to browser')
})

app.get('/home', (req,res) => {
    // res.status(200).send('this is home page')
    res.render('home',{title:'Welcome to ejs'})
})

app.listen(port, (err)=>{
    if(err){
       console.log('sevrer not running')
    }
    console.log('server is running on port '+port)
})