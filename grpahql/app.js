const express = require('express');
const expressGraphQL = require('express-graphql');
const port = 5600;
const app = express();
const schema = require('./schema/schema');

app.use('/graphql', expressGraphQL({
    schema,
    graphiql:true
}))



app.listen(port, () => {
    console.log(`listing to port ${port}`)
})