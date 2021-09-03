import { Router } from "express";
import { getOneUser } from "./controller";

const userRouter = Router()

userRouter.get("/:id", getOneUser)

export default userRouter 