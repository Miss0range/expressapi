import express from 'express';
const app = express();
const port = 3000;

//get method with empty req
app.get('/', (req, res) => {
    res.send('Hello world');
});

//get method with id
app.get('/:id', (req,res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.headers);
    res.send(`Hello ${req.params.id}`);
});

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}.`);
});