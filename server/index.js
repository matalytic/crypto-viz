const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

// Initalize
const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api', router);

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

