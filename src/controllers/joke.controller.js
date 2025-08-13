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

//update a joke
const updateJoke = asyncHandler(async (req, res) => {
    const { jokeId, category, update } = req.body;

    // Check if the joke exists
    const previousJoke = await Joke.findById(jokeId);
    if (!previousJoke) {
        return res.status(404).json({
            success: false,
            message: "Joke not found"
        });
    }

    console.log(`Previous joke: ${previousJoke}`);

    // Update & get updated joke
    const updatedJoke = await Joke.findByIdAndUpdate(
        jokeId,
        { $set: { jokeCategory: category, joke: update } },
        { new: true, runValidators: true }
    );

    res.status(202).json({
        success: true,
        message: "Joke updated successfully",
        data: updatedJoke
    });
});

export { getAllJokes, createNewJoke, deleteJoke, updateJoke};
