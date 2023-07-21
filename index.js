const express = require('express')
const app = express()
const port = 3000

app.get('/sendCounterInQuery', (req, res) => {
    let calculate = req.query.counter;
    let calculatedSum = calculateSum(calculate);
    let response = `The sum is: ${calculatedSum}`;
    res.send(response);
})

app.post('/sendCounterInHeader', (req, res) => {
    let calculate = req.headers.counter;
    console.log(req.headers);
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