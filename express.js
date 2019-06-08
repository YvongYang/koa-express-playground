var express = require('express');
var onHeaders = require('on-headers');
// var onFinished = require('on-finished');
// var responseTime = require('response-time')

var app = express();

function responseTime () {
    return function responseTime (req, res, next) {
      const startAt = process.hrtime()
  
      onHeaders(res, function onHeaders () {
        const diff = process.hrtime(startAt)
        const time = diff[0] * 1e3 + diff[1] * 1e-6
        res.setHeader('X-Response-Time', time.toFixed(3) + 'ms')
      })
  
      next()
    }
}

// function responseTime () {
//     return function responseTime (req, res, next) {
//       var start = Date.now()
//       console.log('start: ', start);
      
  
//       onFinished(res, function onFinished (err, res) {
//         if (err) {
//             throw err;
//         }

//         console.log('response time: ', Date.now() - start);
//       })
  
//       next();
//     }
// }

app.use(responseTime());

app.get('/', (req, res) => {    
    res.send('Hello friends!');
});

app.listen(3000);