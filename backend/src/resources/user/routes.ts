import { Router } from "express";
import { createUser, getOneUser } from "./controller";

const userRouter = Router()

userRouter.get("/:id", getOneUser)
userRouter.post("/", createUser)

export default userRouter 