//create web server
const express = require('express');
const app = express();

//import file system
const fs = require('fs');
//import csv parser
const csv = require('csv-parser');

//import csv file
const results = [];
fs.createReadStream('comments.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });

//define port
const port = 3000;

//listen to port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});