const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const db = require('../database/index.js');

// Initalize
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
app.use(express.static(__dirname + '/../client/dist'));

app.use('/api', router);

app.listen(port, () => console.log(`listening on port ${port}`));

