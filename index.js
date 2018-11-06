const express = require('express');
require('./Services/passport');

const app = express();
require('./Routes/authRoutes')(app);


app.listen(5003);
console.log('Your app is running at port : 5003 || http://localhost:5003');
