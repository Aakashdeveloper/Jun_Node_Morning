import express from 'express';
import axios from 'axios';
import redis from 'redis';

const app = express();
const client = redis.createClient();

client.on('error',(err) => {
    console.log('Error '+err)
});

app.get('/data',(req, res) => {
    const userinput  = (req.query.country).trim();
    const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${userinput}`

    return client.get(`wiki:${userinput}`, (err,result) => {
        if(result){
            const output = JSON.parse(result);
            return res.status(200).json(output)
        } else {
            return axios.get(url)
                .then(response => {
                    const output = response.data;
                    client.setex(`wiki:${userinput}`,3600,JSON.stringify({source:'Redis Cache',...output}));
                    return res.status(200).json({source:'API',...output})
                })
                .catch(err => {
                    return res.send(err)
                })
        }
    })
});

/*
app.get('/api',(req,res) => {
    const abc = (xyz,(res,res) => {
        const vvv = (res,res)=> {
            const nn = (res,res) => {
                return res.json
            }
        }
    }
    
});
*/

app.listen(4500,() => {
    console.log('Server listing to port: ',4500)
});


/**************
 * V8 engine
 * Node compile
 * java=> bitcode =>machine language
 * node => machine language
 * v8 engine(chrome)
 * node=> c++ +  v8 compiler + javascript
 */

 /*
 * callhell
 */