import { Router } from "express";
import { loginUser } from "./controller";

const authRouter = Router()

authRouter.route("/login").post(loginUser)

export default authRouter 