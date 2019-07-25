import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";

const maincall = (myObj,col_name) => {
    MongoClient.connect(url, (err,db) => {
        if(err) throw err;
        var dbo = db.db('classpractice')
        dbo.collection(col_name).insert(myObj, (err) => {
            if(err) throw err;
            console.log('data inserted');
            db.close()
        })
    })
}
//Post Call
maincall.prototype.postData = (col_name,myObj) =>{
    MongoClient.connect(url, (err,db) => {
        if(err) throw err;
        var dbo = db.db('classpractice')
        dbo.collection(col_name).insert(myObj, (err) => {
            if(err) throw err;
            console.log('data inserted');
            db.close()
        })
    })
}

//Get Call
let outres;
maincall.prototype.getData = (col_name) =>{
    MongoClient.connect(url, (err,db) => {
        if(err) throw err;
        var dbo = db.db('classpractice')
        dbo.collection(col_name).find({}).toArray(
            (err,result) => {
                if(err) throw err;
                outres = result
        })
    })

    return outres;
}

module.exports= maincall;