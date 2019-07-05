import express from 'express';
import request from 'request';
import axios from 'axios';
const app = express();
const port = process.env.port || 5600;


//static filr path
app.use(express.static(__dirname+'/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const weatherUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";

app.get('/',(req, res) => {
    res.send('Weather Api running')
})

app.get('/weather', (req,res) => {
    request(weatherUrl, (err,response,body)=>{
        if(err){
            res.status(404).send('no data found')
        }else{
            const output = JSON.parse(body)
            // res.send({type:'Api Response', data:output, newdata:response})
            res.render('ui',{result:output, title:'London Weather'})
        }
    })
})

app.get('/weatheraxios', (req,res)=>{
    axios.get(weatherUrl)
        .then((response) => {
            const outdata = response.data
            return res.send(outdata)
        })
        .catch((err) =>{
            return res.status(404).send(err)
        })
})


app.listen(port, (err) => {
    console.log(`App running on port ${port}`)
})