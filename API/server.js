// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const addressRoute = require('./routes/address.route')
const userRoute = require('./routes/user.route')

const Address = require('./models/address.model')
const User = require('./models/user.model')

mongoose.Promise = global.Promise;
const connection = mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/addresses', addressRoute);
app.use('/user', userRoute)

app.listen(PORT, function() {
    console.log('Server is running on Port:', PORT)
})