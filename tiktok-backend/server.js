import express from "express";
import mongoose from "mongoose";

import Data from "./data.js";
import Videos from "./dbModel.js";

//App configuration
const app = express();
const port = process.env.PORT || 9000;

//Middlewares
//pass the respond as a JSON objects
app.use(express.json());
app.use((req, res, next) => {
    //whenever we receive request, setHeaders so that we accept all requests and then use next() to continue to the function below
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*"), 
    next();
});

//DB configuation
/* MongoDB.com => name: admin, password: PQQcdqieaUwX4ty2 */
const connection_url = "mongodb+srv://admin:PQQcdqieaUwX4ty2@cluster0.tctug.mongodb.net/tiktokdb?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

//API endpoints
//Health check API
//Define: if somebody call my application with get method on the root folder, then send back respond status 200 which mean "OK" and the text "Hello World!"
app.get("/", (req, res) => res.status(200).send("Hello World!")); 

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

app.post("/v2/posts", (req, res) => {
    //POST request is to ADD DATA to the database
    //It will let us ADD a video DOCUMENT to the videos COLLECTION
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            //respond status 201 mean creation succeeded
            res.status(201).send(data);
        }
    });
});

//Listen
//make the app listen for requests in the specified port
app.listen(port, () => console.log(`listening on local host:${port}`));