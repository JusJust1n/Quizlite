require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const studysetsRoutes = require('./routes/studysets')

//creates an express app
const app = express();

// react to requests, do this by setting up route handling
//responds to get request, if you go to localhost:4000/ (the root of the domain), it will fire a function to handle the request.
// req has information about the request, res used to send response back to client
//res.json... use res object to send back a json string back

//middleware
app.use(express.json()) // what this does is looks if data is looks if a request has data being sent to the server, then it parses it 
//and attaches it to the request object so it can be accessed in request handler
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
//route
/*
app.get('/', (req, res) => {
    res.json({mssg: "welcome to the app"})
})
*/
// what this means is if you fire a request to the route (/api,,,), then fire the second parameter
app.use('/api/studysets', studysetsRoutes)

// Connect to the DB
//this is asyncronous and returns a promise.
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests, put in mongoose.connect so that you can only listen to requests once you connect to the database
        app.listen(process.env.PORT, () => {
        console.log('connected to DB and listening on port', process.env.PORT);
});
    })
    .catch((error) => {
        console.log(error)
    })

