import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const MONGO_URL = "mongodb://127.0.0.1:27017";

mongoose.connect(MONGO_URL, {
    dbName: 'toturial-node-Dat',
}).then(() => {
    console.log("DB connected OK !");
    server();
}).catch((error) => {
    console.log(error);
})


// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`server running on port : ${PORT}`);
// })

const server = () => {
    console.log("hello");
    app.use('api/v1/list',)
}