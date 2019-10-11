const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

// mongoose.connect('mongodb+srv://magico:abracadabra@omnistack-l6jr2.mongodb.net/semana09?retryWrites=true&w=majority', {
    mongoose.connect('mongodb://127.0.0.1:27017/semana09', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);


app.listen(3333); 