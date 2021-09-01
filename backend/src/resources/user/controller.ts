import dbClient from "../../utils/client"
import { Request, Response } from "express"

export const getOneUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)

    const currentUser = await dbClient.user.findUnique({
        where: { id }
    })

    res.json({ data: currentUser })
}

export const createUser = async (req: Request, res: Response) => {
    const newUser = req.body

    const savedUser = await dbClient.user.create({ data: newUser })

    res.json({ user: savedUser })
}