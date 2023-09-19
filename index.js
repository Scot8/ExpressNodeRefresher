const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000



// function middleware1(req, res, next) {
//   console.log("from the middleware" + req.headers.counter);
//   next();
// }

// app.use(middleware1);

app.use(bodyParser.json())

function calculateSum(counter) {
  var sum = 0;
  for (let i = 1; i <= counter; i++) {
    sum += i;

  }
  return sum;
}

function calculateMul(counter) {
  var answer = 1;
  for (let i = 1; i <= counter; i++) {
    answer = answer * i;
  }
  return answer;
}

function handleFirstRequest(req, res) {

  var counter = req.query.counter;

    var calculatedSum = calculateSum(counter);
    //var calculatedMul = calculateMul(counter);

    //var stringAnswer = "sum is " + calculatedSum + " and mul is" + calculateMul;

    var answerObject = {
      sum: calculatedSum,
    };

    res.send(answerObject);

}

function givePage(req, res) {
  res.send(`
  <head>
      <title>Hello from page</title>
  </head>
  <body>
      <b>Hi there</b>
  </body>
  `)
}

app.get('/handlesum', handleFirstRequest)

app.get('/', givePage)

function started() {
  console.log(`Example app listening on port ${port}`);
}


app.listen(port, started)





