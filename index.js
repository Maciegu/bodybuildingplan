const express = require('express');
const app = express();
const {port} = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

//db
require('./db/mongoose');

//parsery
//content-type: application/json
app.use(bodyParser.json());

//routes
app.use('/api',apiRouter);

app.listen(port, function(){
    console.log('Server is listening on http://localhost:' + port); // JESLI DZIALA DOSTAJEMY W TERMINALU INFORMACJE
});