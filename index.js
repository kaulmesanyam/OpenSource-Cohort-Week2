const express = require('express')
const app = express()
const port = 3000

app.get('/handleSumRequest', (req, res) => {
    let calculate = req.query.counter;
    let calculatedSum = calculateSum(calculate);
    let response = `The sum is: ${calculatedSum}`;
    res.send(response);
})

app.post('/handlePostRequest', (req, res) => {
    res.send("Post request handeled successfully")
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