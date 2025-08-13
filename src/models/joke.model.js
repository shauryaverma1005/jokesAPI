import mongoose from "mongoose";

const jokeSchema = mongoose.Schema({
    jokeCategory : {
        type: String,
        enum : ["adult", "normal"],
        required: true,
        trim: true,
        lowercase: true
    },
    joke: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    }
});

export const Joke = mongoose.model("Joke", jokeSchema);