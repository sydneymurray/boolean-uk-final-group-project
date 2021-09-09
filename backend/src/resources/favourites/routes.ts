import { Router } from "express";
import { retrieveAll } from "./controller";
import {createOne} from "./controller"
import {deleteOne} from "./controller"
const favouritesRouter = Router()

favouritesRouter.get("/", retrieveAll)
favouritesRouter.post("/:id", createOne)
favouritesRouter.delete("/:id", deleteOne)

export default favouritesRouter 