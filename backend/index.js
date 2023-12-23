const express = require('express');
const app = express();
const { port } = require('./app/config');
const apiRouter = require('./app/routes/users');
const apiRouterPersonal = require('./app/routes/personaldataapi');
const bodyParser = require('body-parser');
const cors = require('cors');

//db
require('./app/db/mongoose');

//parsery
//content-type: application/json
app.use(bodyParser.json());

// fix cors
app.use(cors());

//routes
app.use('/api',apiRouter);
app.use('/api',apiRouterPersonal);

app.listen(port, function(){
    console.log('Server is listening on http://localhost:' + port); // JESLI DZIALA DOSTAJEMY W TERMINALU INFORMACJE
});