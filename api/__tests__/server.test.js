const request = require('supertest');
const app = require('./../server');


//COMMENTS 

describe('GET /comments', ()=> {
    test('Should get all comments', async() =>{
        await request(app)
        .get('/comments')
        .expect(200)
        .end();
    });
});

describe('GET /comments/:id', ()=> {
    test('Should return the comment specified', async() => {
        await request(app)
        .get('/comments/123')
        .expect(200)
        .end();
    });
});

describe('DELETE /comments/:id', ()=> {
    test('Should delete the comment specified', async() => {
        await request(app)
        .delete('/comments/123')
        .expect(200)
        .end();
    });
});

describe('POST /comments', ()=> {
    test('Should create a new comment', async()=> {
        await request(app)
        .post('/comments')
        .expect(200)
        .end();
    });
});

describe('PATCH /comments/:id', () =>{
    test('Should update the comment', async() => {
        await request(app)
        .patch('/comments/123')
        .expect(200)
        .end();
    });
});

//PRODUCTS

describe('GET /products', ()=> {
    test('Should get all products', async() =>{
        await request(app)
        .get('/products')
        .expect(200)
        .end();
    });
});

describe('GET /products/:id', ()=> {
    test('Should return the product specified', async() => {
        await request(app)
        .get('/products')
        .expect(200)
        .end();
    });
});

describe('DELETE /products/:id', ()=> {
    test('Should delete the product specified', async() => {
        await request(app)
        .delete('/products/123')
        .expect(200)
        .end();
    });
});

describe('POST /products', ()=> {
    test('Should create a new product', async()=> {
        await request(app)
        .post('/products')
        .expect(200)
        .end();
    });
});

describe('PATCH /products/:id', () =>{
    test('Should update the product', async() => {
        await request(app)
        .patch('/products/123')
        .expect(200)
        .end();
    });
});

//CUSTOMERS

describe('GET /customers', ()=> {
    test('Should get all customers', async() =>{
        await request(app)
        .get('/customers')
        .expect(200)
        .end();
    });
});

describe('GET /customers/:id', ()=> {
    test('Should return the customer specified', async() => {
        await request(app)
        .get('/customers')
        .expect(200)
        .end();
    });
});

describe('DELETE /customers/:id', ()=> {
    test('Should delete the customer specified', async() => {
        await request(app)
        .delete('/customers/123')
        .expect(200)
        .end();
    });
});

describe('POST /customers', ()=> {
    test('Should create a new customer', async()=> {
        await request(app)
        .post('/customers')
        .expect(200)
        .end();
    });
});

describe('PATCH /customers/:id', () =>{
    test('Should update the customer', async() => {
        await request(app)
        .patch('/customers/123')
        .expect(200)
        .end();
    });
});

//SELLERS

describe('GET /sellers', ()=> {
    test('Should get all sellers', async() =>{
        await request(app)
        .get('/sellers')
        .expect(200)
        .end();
    });
});

describe('GET /sellers/:id', ()=> {
    test('Should return the seller specified', async() => {
        await request(app)
        .get('/sellers')
        .expect(200)
        .end();
    });
});

describe('DELETE /sellers/:id', ()=> {
    test('Should delete the seller specified', async() => {
        await request(app)
        .delete('/sellers/123')
        .expect(200)
        .end();
    });
});

describe('POST /sellers', ()=> {
    test('Should create a new seller', async()=> {
        await request(app)
        .post('/sellers')
        .expect(200)
        .end();
    });
});

describe('PATCH /sellers/:id', () =>{
    test('Should update the seller', async() => {
        await request(app)
        .patch('/sellers/123')
        .expect(200)
        .end();
    });
});

//DROPS

describe('GET /drops', ()=> {
    test('Should get all drops', async() =>{
        await request(app)
        .get('/drops')
        .expect(200)
        .end();
    });
});

describe('GET /drops/:id', ()=> {
    test('Should return the drop specified', async() => {
        await request(app)
        .get('/drops')
        .expect(200)
        .end();
    });
});

describe('DELETE /drops/:id', ()=> {
    test('Should delete the drop specified', async() => {
        await request(app)
        .delete('/drops/123')
        .expect(200)
        .end();
    });
});

describe('POST /drops', ()=> {
    test('Should create a new drop', async()=> {
        await request(app)
        .post('/drops')
        .expect(200)
        .end();
    });
});

describe('PATCH /drops/:id', () =>{
    test('Should update the drop', async() => {
        await request(app)
        .patch('/drops/123')
        .expect(200)
        .end();
    });
});

//PURCHASES


describe('GET /purchases', ()=> {
    test('Should get all purchases', async() =>{
        await request(app)
        .get('/purchases')
        .expect(200)
        .end();
    });
});

describe('GET /purchases/:id', ()=> {
    test('Should return the purchase specified', async() => {
        await request(app)
        .get('/purchases')
        .expect(200)
        .end();
    });
});

describe('DELETE /purchases/:id', ()=> {
    test('Should delete the purchase specified', async() => {
        await request(app)
        .delete('/purchases/123')
        .expect(200)
        .end();
    });
});

describe('POST /purchases', ()=> {
    test('Should create a new purchase', async()=> {
        await request(app)
        .post('/purchases')
        .expect(200)
        .end();
    });
});

describe('PATCH /purchases/:id', () =>{
    test('Should update the purchase', async() => {
        await request(app)
        .patch('/purchases/123')
        .expect(200)
        .end();
    });
});

//CATEGORIES

describe('GET /categories', ()=> {
    test('Should get all categories', async() =>{
        await request(app)
        .get('/categories')
        .expect(200)
        .end();
    });
});

describe('GET /categories/:id', ()=> {
    test('Should return the category specified', async() => {
        await request(app)
        .get('/categories')
        .expect(200)
        .end();
    });
});

describe('DELETE /categories/:id', ()=> {
    test('Should delete the category specified', async() => {
        await request(app)
        .delete('/categories/123')
        .expect(200)
        .end();
    });
});

describe('POST /categories', ()=> {
    test('Should create a new category', async()=> {
        await request(app)
        .post('/categories')
        .expect(200)
        .end();
    });
});

describe('PATCH /categories/:id', () =>{
    test('Should update the category', async() => {
        await request(app)
        .patch('/categories/123')
        .expect(200)
        .end();
    });
});
