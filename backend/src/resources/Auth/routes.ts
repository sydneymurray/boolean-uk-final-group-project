import { Router } from "express";
import { loginUser, createUser, getAllListings } from "./controller";

const authRouter = Router()

authRouter.route("/login").post(loginUser)
authRouter.route("/sign-up").post(createUser)
authRouter.route("/listings").get(getAllListings)

export default authRouter 