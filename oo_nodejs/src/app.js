import express from 'express';
const app = express();
import database from './datatbase/mongoconnect';
const port = 7600;


app.post('/adduser', (req,res) => {
    var mydata = {name:"abc", class:"Node"};
    database.prototype.postData('nodeJune',mydata)
})


app.get('/getdata',(req,res) => {
    let out = database.prototype.getData('nodeJune');
    res.send(out);
})



app.listen(port,(err)=>{
    console.log(`server is running on port ${port}`)
});
