const graphql = require('graphql');
const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLSchema
} = graphql



const ProductType = new GraphQLObjectType({
    name:'Product',
    fields:{
        id : {type:GraphQLInt},
        name : {type:GraphQLString},
        rating : {type:GraphQLInt},
        category : {type:GraphQLString},
        price : {type:GraphQLInt},
        delivery : {type:GraphQLString},
        image : {type:GraphQLString},
        details: {type:GraphQLString}
    }
})

// Query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        product:{
           type: ProductType,
           args:{id:{type:GraphQLInt}},
           resolve(parentValue, args){
               return axios.get(`http://localhost:8900/products/${args.id}`)
                .then((res) => res.data);
               //return _.find(products,{id:arg.id})
           }
        }
    }
})

//Mutation
const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addProduct:{
           type: ProductType,
           args:{
            id : {type:GraphQLInt},
            name : {type:GraphQLString},
            rating : {type:GraphQLInt},
            category : {type:GraphQLString},
            price : {type:GraphQLInt},
            delivery : {type:GraphQLString},
            image : {type:GraphQLString},
            details: {type:GraphQLString}
           },
           resolve(parentValue,{id, name, rating}){
               return axios.post(`http://localhost:8900/products`,{id,name,rating})
                .then((res) => res.data)
           }
        }
    }

})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation:mutation
})