import { Request, Response } from "express"
import { User } from "@prisma/client";
import dbClient from "../../utils/client";


export function createOne(req: Request, res: Response){
    let authDetails = req.currentUser as User
        dbClient.favourites.create({data:{
            user: Number(authDetails.id),
            listing: Number(req.params.id)
        }})
        .then(dbResponse => res.json(dbResponse))
        .catch (dbResponse =>
            res.status(500).json({ 
                msg: "Data was not saved due to a problem",
                error: dbResponse
            }))
}

export function retrieveAll(req: Request, res: Response){
    const authDetails = req.currentUser as User
    try {
        dbClient.favourites.findMany({
            include:{Listings: {include: {Track: true}}},
            where: {user: Number(authDetails.id)},
        })
        .then(dbResponse => res.json({ data: dbResponse }))
    } 
    catch (error) {
        res.status(401).json({ msg: "No favourites were found" })
    }
}

export function deleteOne(req: Request, res: Response){
    const authDetails = req.currentUser as User
    try {
        dbClient.favourites.delete({
            where: {id: Number(req.params.id)},
        })
        .then(dbResponse => res.json({ data: dbResponse }))
    } 
    catch (error) {
        res.status(401).json({ msg: "No favourite to delete was found" })
    }
}




