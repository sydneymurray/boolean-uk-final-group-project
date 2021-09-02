import { Request, Response } from "express"
import { User } from "prisma/prisma-client"
import { findUserWithValidation } from "./service"
import { createToken } from "../../utils/JWTGenerator"

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