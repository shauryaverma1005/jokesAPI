import express, {Router} from "express";
import {getAllJokes, createNewJoke} from "../controllers/joke.controller.js";
const router = Router();

router.route("/jokes")
.get(getAllJokes)
.post(createNewJoke)

export default router;