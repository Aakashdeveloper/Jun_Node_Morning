const express = require('express');
const moviesRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const db_name='classdatabase';

function router(menu){
    
    moviesRouter.route('/')
        .get((req,res) => {
            mongodb.connect(url, (err,db)  => {
                if(err) throw err;
                const dbo = db.db(db_name);
                dbo.collection('movies').find({}).toArray(
                 (err,data)=>{
                     if(err) throw(err);
                     res.render('movies',{title:'Movies Page',
                        menu:menu,
                        moviesdata:data})
                 }   
                )
            })
            
    })
    
    moviesRouter.route('/details/:id')
        .get((req,res) => {
            const {id} = req.params;
            mongodb.connect(url, (err,db)  => {
                if(err) throw err;
                const dbo = db.db(db_name);
                dbo.collection('movies').findOne({_id:id},(err,data)=>{
                    if(err) throw(err);
                     res.render('movies_Details',{title:'Movies Page',
                        menu:menu,
                        moviesdetail:data})
                    })
            })  

        })
    return moviesRouter
}


module.exports = router;