const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const BookRoute = require("./route/book.route");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to MongoDB
try{
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
}
catch(error){
    console.log("error", error);
}

app.use("/book", BookRoute);

// app.get("/", (req,res) => {
//     res.send("Bookstore");
// });

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});