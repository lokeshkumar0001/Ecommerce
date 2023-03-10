const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const cors = require('cors');
const path = require("path")

const errorMiddleware = require("./middleware/error");

//config
dotenv.config({path: "backend/config/config.env"});
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(fileUpload({useTempFiles: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true }));

//Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");
    
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname,"../frontend/build")));

app.get("*", (req,res) =>{
    res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
})

//Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
