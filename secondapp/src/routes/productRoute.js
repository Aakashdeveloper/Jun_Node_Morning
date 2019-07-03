const express = require('express');
const productRouter = express.Router();


function router(menu){
    productRouter.route('/')
        .get((req,res) => {
            res.render('Products',{title:'Product Page',
                        menu:menu})
    });

    productRouter.route('/details')
        .get((req,res)=>{
            res.render('product_details',{title:'Product Details Page',
                        menu:menu})
    })

    return productRouter

}

module.exports = router