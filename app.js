const express = require('express');
const app = express();
const PORT = 5555;

require('./configuration/express')(app);

require('./routes/kadanes')(app);
require('./routes/increment')(app);
require('./routes/bracket')(app);
require('./routes/duplicate')(app);
require('./routes/home')(app);

app.listen(PORT, function () {
    console.log(`App listening at port: ${PORT}`);
});