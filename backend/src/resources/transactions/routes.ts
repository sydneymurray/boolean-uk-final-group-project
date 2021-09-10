import { Router } from "express";
import { retrieveAll } from "./controller";
import {createOne} from "./controller"

const favouritesRouter = Router()

favouritesRouter.get("/", retrieveAll)
favouritesRouter.post("/", createOne)

export default favouritesRouter 