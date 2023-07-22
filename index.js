import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from  'url'
import { dirname } from 'path';

const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.json());
app.use(middleware1);

function middleware1(req, res, next) {
    if( req.body.counter == undefined || req.body.counter < 1000000) {
        next();
    } else {
        res.status(411).send("Counter sent is a very big number")
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/sendCounterInQuery', (req, res) => {
    let calculate = req.query.counter;
    let calculatedSum = calculateSum(calculate);
    let answerObj = {
        sum: calculatedSum
    }
    res.send(answerObj);
})

app.post('/sendCounterInHeader', (req, res) => {
    let calculate = req.headers.counter;
    let calculatedSum = calculateSum(+calculate);
    let response = `The sum is: ${calculatedSum}`;
    res.send(response);
});

app.post('/sendCounterInBody', (req, res) => {
    let counter = req.body.counter;
    
    let calculatedSum = calculateSum(+counter);
    let calculatedMul = calculateMul(+counter);
    let answerObj = {
        sum: calculatedSum,
        mul: calculatedMul
    }
    res.send(answerObj);
});




function calculateSum(counter) {
    let sum = 0;
    for(let i = 1; i <= counter; i++) {
        sum += i;
    }
    return sum;
}

function calculateMul(counter) {
    let mul = 1;
    for(let i = 1; i <= counter; i++) {
        mul *= i;
    }
    return mul;
}

 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })