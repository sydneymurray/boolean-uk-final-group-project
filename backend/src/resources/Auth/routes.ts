import { Router } from "express";
import { loginUser, createUser } from "./controller";

const authRouter = Router()

authRouter.route("/login").post(loginUser)
authRouter.route("/sign-up").post(createUser)

export default authRouter 