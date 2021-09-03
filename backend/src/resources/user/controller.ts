import { Request, Response } from "express"
import dbClient from "../../utils/client";

export const getOneUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)

    const currentUser = await dbClient.user.findUnique({
        where: { id }
    })

    res.json({ data: currentUser })
}