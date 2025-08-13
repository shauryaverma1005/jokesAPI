import { Joke } from "../models/joke.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllJokes = (req, res) => {
    res.send("hello world");
};

const createNewJoke = asyncHandler (async (req, res) => {
    try {
        const { jokeCategory, joke } = req.body;
        console.log(`jokeCategory : ${jokeCategory}, joke : ${joke}`);
        const newJoke = await Joke.create({
            jokeCategory,
            joke
        });
        console.log(newJoke);
        const id = newJoke._id;
        const createdJoke = await Joke.findOne({_id: id})
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: "New joke added successfully",
            data : createdJoke
        })
        
    } catch (error) {
        res.status(500).json({
            statusCode : 400,
            success : false,
            message: "Joke already exist"
        })
    }
})

export { getAllJokes, createNewJoke };
