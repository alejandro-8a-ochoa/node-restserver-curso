require('./config/config');
// require('./routes/usuario')
const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Base de datos online');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(require('./routes/usuario'));


app.listen(process.env.PORT, () => {
    console.log(`escuchando el puerto:`, process.env.PORT);
});