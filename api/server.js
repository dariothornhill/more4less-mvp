const express = require('express');
const app = express();

//test data
const products = [
    {
        "id":1,
        "title": "Shoes",
        "base_price": 29.99,
        "currency": "BBD",
        "description": "Not nike",
        "image": {
            "src": "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        }
    },
    {
        "id":2,
        "title": "Onions",
        "base_price": 29.99,
        "currency": "BBD",
        "description": "Makes you cry",
        "image": {
            "src": "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        }
    },
    {
        "id":3,
        "title": "Cucumbers",
        "base_price": 29.99,
        "currency": "BBD",
        "description": "A tasteless melon",
        "image": {
            "src": "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        }
    }
];

//--products

app.get('/products', (req, res) => {

    const message = "get all products";

    

    res.status(200).send();
});

app.get('/products/:id', (req, res) => {

    const message = "get product by id";
    res.status(200).send({message});
});

app.post('/products', (req, res) => {

    const message = "create new product";
    res.status(200).send({message});
});

app.patch('/products/:id', (req, res) => {

    const message = "modify specified product by ID";
    res.status(200).send({message});
});

app.delete('/products/:id', (req, res) => {

    const message = "delete specified product by ID";
    res.status(200).send({message});
});

//--comments

app.get('/comments', (req, res) => {

    const message = "get all comments";
    res.status(200).send({message});
});

app.get('/comments/:id', (req, res) => {

    const message = "get comments by id";
    res.status(200).send({message});
});

app.post('/comments', (req, res) => {

    const message = "create new comment";
    res.status(200).send({message});
});

app.patch('/comments/:id', (req, res) => {

    const message = "modify specified comment by ID";
    res.status(200).send({message});
});

app.delete('/comments/:id', (req, res) => {

    const message = "delete specified comment by ID";
    res.status(200).send({message});
});

//--customers

app.get('/customers', (req, res) => {

    const message = "get all customers";
    res.status(200).send({message});
});

app.get('/customers/:id', (req, res) => {

    const message = "get customer by id";
    res.status(200).send({message});
});

app.post('/customers', (req, res) => {

    const message = "create new customer";
    res.status(200).send({message});
});

app.patch('/customers/:id', (req, res) => {

    const message = "modify specified customer by ID";
    res.status(200).send({message});
});

app.delete('/customers/:id', (req, res) => {

    const message = "delete specified customer by ID";
    res.status(200).send({message});
});

//--sellers

app.get('/sellers', (req, res) => {

    const message = "get all sellers";
    res.status(200).send({message});
});

app.get('/sellers/:id', (req, res) => {

    const message = "get seller by id";
    res.status(200).send({message});
});

app.post('/sellers', (req, res) => {

    const message = "create new seller";
    res.status(200).send({message});
});

app.patch('/sellers/:id', (req, res) => {

    const message = "modify specified seller by ID";
    res.status(200).send({message});
});

app.delete('/sellers/:id', (req, res) => {

    const message = "delete specified seller by ID";
    res.status(200).send({message});
});

//--drops

app.get('/drops', (req, res) => {

    const message = "get all drops";
    res.status(200).send({message});
});

app.get('/drops/:id', (req, res) => {

    const message = "get drop by id";
    res.status(200).send({message});
});

app.post('/drops', (req, res) => {

    const message = "create new drop";
    res.status(200).send({message});
});

app.patch('/drops/:id', (req, res) => {

    const message = "modify specified drop by ID";
    res.status(200).send({message});
});

app.delete('/drops/:id', (req, res) => {

    const message = "delete specified drop by ID";
    res.status(200).send({message});
});

//--purchases

app.get('/purchases', (req, res) => {

    const message = "get all purchases";
    res.status(200).send({message});
});

app.get('/purchases/:id', (req, res) => {

    const message = "get purchase by id";
    res.status(200).send({message});
});

app.post('/purchases', (req, res) => {

    const message = "create new purchase";
    res.status(200).send({message});
});

app.patch('/purchases/:id', (req, res) => {

    const message = "modify specified purchase by ID";
    res.status(200).send({message});
});

app.delete('/purchases/:id', (req, res) => {

    const message = "delete specified purchase by ID";
    res.status(200).send({message});
});

//--categories

app.get('/categories', (req, res) => {

    const message = "get all categories";
    res.status(200).send({message});
});

app.get('/categories/:id', (req, res) => {

    const message = "get category by id";
    res.status(200).send({message});
});

app.post('/categories', (req, res) => {

    const message = "create new category";
    res.status(200).send({message});
});

app.patch('/categories/:id', (req, res) => {

    const message = "modify specified category by ID";
    res.status(200).send({message});
});

app.delete('/categories/:id', (req, res) => {

    const message = "delete specified category by ID";
    res.status(200).send({message});
});

app.listen(3000);