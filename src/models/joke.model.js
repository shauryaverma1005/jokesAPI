import mongoose from "mongoose";

const jokeSchema = mongoose.Schema({
    jokeCategory : {
        type: String,
        enum : ["adults", "normal"],
        required: true,
        trim: true,
        lowercase: true
    },
    joke: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    }
});

export const Joke = mongoose.model("Joke", jokeSchema);