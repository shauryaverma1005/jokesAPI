import { Joke } from "../models/joke.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";


// Get All Jokes
const getAllJokes = asyncHandler(async (req, res) => {
    const allJokes = await Joke.find({});
    console.log(allJokes);
    res.status(200).json({
        allJokes
    })
});


// Create new jokes
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
        res.status(201).json({
            statusCode: 201,
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

//delete a joke

const deleteJoke = asyncHandler( async (req, res) => {
    const {jokeId} = req.body;
    const findJoke = await Joke.findOne({_id : jokeId});
    console.log(`jokeId : ${jokeId}, joke Data : ${findJoke}`)
    const deleted = await Joke.deleteOne({_id: jokeId});
    res.status(200).json({
        statusCode: 200,
        message: "Joke deleted successfully!!",
        data: deleted
    })
})

export { getAllJokes, createNewJoke, deleteJoke};
