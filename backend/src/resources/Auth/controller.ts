import { Request, Response } from "express"
import { User } from "prisma/prisma-client"
import { findUserWithValidation } from "./service"
import { createToken } from "../../utils/JWTGenerator"
import { user } from "./service";

export const loginUser = async (req: Request, res: Response) => {
    const loginDetails: User = req.body

    try {
        const loggedUser = await findUserWithValidation(loginDetails)

        const token = createToken({ id: loggedUser.id, username: loggedUser.username })
        res.cookie("token", token, { httpOnly: true })
        res.json({ user: { id: loggedUser.id, username: loggedUser.username }})
    } catch (error: any) {
        res.status(401).json({ msg: error.message })
    }
}

export const createUser = async (req: Request, res: Response) => {
    const newUser = req.body
    try {
        const savedUser = await user.create({ data: newUser })
    
        const token = createToken({ id: savedUser.id, username: savedUser.username })
        res.cookie("token", token, { httpOnly: true })
        res.json({ user: { id: savedUser.id, username: savedUser.username }})
    } catch (error) {
        res.status(412).json({ msg: "You probably entered the sign up data in an invalid way "})
    }
}