const express = require('express');
const app = express();

const http = require('http');

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Connect to MongoDB
const mongoDbPath = "mongodb+srv://anirbanpati:Sanutheking11@cluster0.q982dnc.mongodb.net/notesdb";
mongoose.connect(mongoDbPath).then(function () {
    app.get('/', function (req, res) {
        const response = { message: "Welcome to the Notes API" };
        res.json(response);
    });

    const noteRouter = require('./routes/Note');
    app.use('/notes', noteRouter);



});




const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT, function () {
    console.log('Server is running on PORT :' + PORT);
});