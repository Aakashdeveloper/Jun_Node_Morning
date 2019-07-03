const express = require('express');
const app = express();
const port = process.env.port || 5000;

// Serving static file
app.use(express.static(__dirname+'/public'));
// Path of views
app.set('views', './src/views');
// Template engine
app.set('view engine','ejs');


let final_menu = [{name:'Home', link:"/"},
                  {name:'Movies', link:"/movies"},
                  {name:'Product',link:'/products'}];

const productRouter = require('./src/routes/productRoute')(final_menu);
const moviesRouter =  require('./src/routes/moviesRoute')(final_menu);

app.get('/', (req,res) => {
    // res.status(200).send('this is home page')
    res.render('home',{title:'Home Page', 
                      menu:final_menu})
})

app.use('/products', productRouter);
app.use('/movies',moviesRouter);


app.listen(port, (err)=>{
    if(err){
       console.log('sevrer not running')
    }
    console.log('server is running on port '+port)
})