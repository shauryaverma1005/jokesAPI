import { app } from "./app.js";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv";

// dotenv configuration 
dotenv.config({
    path: "../.env"
})

// MongoDB connection
connectDB()
.then(()=> {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})
.catch((err) => {
    console.log(`MongoDB connection Error : ${err}`)
}) 