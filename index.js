const express = require('express');
const app = express();
const {port} = require('./config');
const apiRouter = require('./routes/api');


//routes
app.use('/',apiRouter);

app.listen(port, function(){
    console.log('Server is listening on http://localhost:' + port); // JESLI DZIALA DOSTAJEMY W TERMINALU INFORMACJE
});