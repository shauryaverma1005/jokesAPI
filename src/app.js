import express from "express";
import cors from "cors";

//Express App
const app = express();

// CORS
app.use(cors({
    origin : [],
    credentials: true
}))

// Middlewares
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended : true, limit: "16kb"}));
app.use(express.static("../public"));

