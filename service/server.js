// consts to import

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const db = require("./Database/db.js");


// middleware node server
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());


app.listen(port, (err) => {
  console.log(`Server is running on port ${port}`);
});