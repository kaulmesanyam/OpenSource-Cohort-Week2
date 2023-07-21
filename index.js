const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(middleware1);
app.use(bodyParser.json());

function middleware1(req, res, next) {
    console.log(`From inside the middleware: ${req.headers.counter}`);
    next();
}

app.get('/sendCounterInQuery', (req, res) => {
    let calculate = req.query.counter;
    let calculatedSum = calculateSum(calculate);
    let response = `The sum is: ${calculatedSum}`;
    res.send(response);
})

app.post('/sendCounterInHeader', (req, res) => {
    let calculate = req.headers.counter;
    let calculatedSum = calculateSum(+calculate);
    let response = `The sum is: ${calculatedSum}`;
    res.send(response);
});

app.post('/sendCounterInBody', (req, res) => {
    console.log(req.body);
    let calculate = req.body.counter;
    let calculatedSum = calculateSum(+calculate);
    let response = `The sum is: ${calculatedSum}`;
    res.send(response);
});




function calculateSum(counter) {
    let sum = 0;
    for(let i = 1; i <= counter; i++) {
        sum += i;
    }
    return sum;
}

 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })