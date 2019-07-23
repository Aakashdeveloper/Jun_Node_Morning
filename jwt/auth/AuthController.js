var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jwt  = require('jsonwebtoken');
var bycrpt = require('bcryptjs');
var config = require('../config');

router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

var User = require('../user/User');

router.post('/register', (req,res) => {
    var hashedPassword = bycrpt.hashSync(req.body.password, 8);
    User.create({
        name: req.body.name,
        email:req.body.email,
        password: hashedPassword,
        role:req.body.role?req.body.role:'user'
    },
        function(err,user){
            if(err) return res.status(500).send('Problem in register');
           var token  = jwt.sign({id:user._id}, config.secert,{
               expiresIn:86400 //for 24 hrs
           })
           res.status(200).send({auth:true, token:token})
        }
    )
})



module.exports = router;