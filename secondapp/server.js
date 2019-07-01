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

let final_menu = [{name:'Home', link:"/home"},
                    {name:'Product',link:'/products'},
                    {name:'Order', link:"/orders"}];

app.get('/home', (req,res) => {
    // res.status(200).send('this is home page')
    res.render('home',{title:'Home Page', 
                      menu:final_menu})
})

app.get('/products', (req,res) => {
    res.render('Products',{title:'Product Page',
                        menu:final_menu})
})

app.get('/orders', (req,res) => {
    res.render('order',{title:'Order Page',
                        menu:final_menu})
})
app.get('/details', (req,res) => {
    res.render('order_Details',{title:'Orders Details Page',
                        menu:final_menu})
})

app.get('/details', (req,res) => {
    res.render('product_details',{title:'Product Details Page',
                        menu:final_menu})
})


app.listen(port, (err)=>{
    if(err){
       console.log('sevrer not running')
    }
    console.log('server is running on port '+port)
})