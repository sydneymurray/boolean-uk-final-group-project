import user from "./service"
import { Request, Response } from "express"
import { createToken } from "../../utils/JWTGenerator"

export const getOneUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)

    const currentUser = await user.findUnique({
        where: { id }
    })

    res.json({ data: currentUser })
}

export const createUser = async (req: Request, res: Response) => {
    const newUser = req.body
    const savedUser = await user.create({ data: newUser })

    const token = createToken({ id: savedUser.id, username: savedUser.username })
    res.cookie("token", token, { httpOnly: true })
    res.json({ user: { id: savedUser.id, username: savedUser.username }})
}