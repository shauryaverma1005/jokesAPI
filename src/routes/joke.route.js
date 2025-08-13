import express, {Router} from "express";
import {getAllJokes, createNewJoke, deleteJoke, updateJoke} from "../controllers/joke.controller.js";
const router = Router();

router.route("/jokes")
.get(getAllJokes)
.post(createNewJoke)
.delete(deleteJoke)
.patch(updateJoke)

export default router;