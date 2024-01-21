const express = require('express');
const app = express();
const { port } = require('./app/config');
const apiRouter = require('./app/routes/users');
const apiRouterPersonal = require('./app/routes/personaldataapi');
const apiTrainingPlan = require('./app/routes/trainplan');
const apiPlanTracker = require('./app/routes/plantracker');
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
app.use('/api',apiTrainingPlan);
app.use('/api',apiPlanTracker);

app.listen(port, function(){
    console.log('Server is listening on http://localhost:' + port); // JESLI DZIALA DOSTAJEMY W TERMINALU INFORMACJE
});