const express = require('express');
const PORT = process.env.HTTP_PORT || 8081;
var AWS = require("aws-sdk");

const app = express();
// app.get('/', (req, res) => {
//     res.send('flowers smell nice');
// });
// app.get('/flower', (req, res) => {
//     res.json({
//       name: 'Dandelion',
//       colour: 'Blue-ish'
//     });
// });
/****** /microservice route START*/


/****** /microservice route END*/

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}.`);
});

// AWS.config.update({
//     region: "eu-west-2",
//     endpoint: "http://localhost:8000"
// });

// var docClient = new AWS.DynamoDB.DocumentClient();//