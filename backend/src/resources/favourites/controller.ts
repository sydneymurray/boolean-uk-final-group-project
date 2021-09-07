import { Request, Response } from "express"
import { User } from "@prisma/client";
import dbClient from "../../utils/client";


export function createOne(req: Request, res: Response){
    let authDetails = req.currentUser as User
    try{
        dbClient.favourites.create({data:{
            user: Number(authDetails.id),
            listing: Number(req.body.listing)
        }})
        .then(dbResponse => res.json(dbResponse))
    }
    catch (error) {
        res.status(500).json({ msg: "Data was not saved due to a problem" })
    }
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


/*
function retrieveEventDesigners(req, res){
  let eventName = req.params.eventName
  prisma.events.findMany({
    include: {Outfit: {include: {Designers: {select: {firstName: true, lastName: true}}}}},
    where: {name: eventName}})
    .then(dbResponse => res.json(dbResponse[0].Outfit[0].Designers))
}

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne, retrieveEventModels, 
  retrieveEventDesigners}


/*
function retrieveEventModels(req, res){
  let eventName = req.params.eventName
  prisma.events.findMany({
    where: {name: eventName}})
    .then(dbResponse => {
      eventID = dbResponse[0].id
      prisma.outfit.findMany({ 
        include: {Models: true},
        where:{modelsID: eventID},
        orderBy: {lastName: "asc"}})
        .then(dbResponse => res.json(dbResponse))
    })
}
*/


/*
export function retrieveAll(req: Request, res: Response){
    const authDetails = req.currentUser as User
    try {
        dbClient.favourites.findMany({
            include:{Listings: true},
            where: {user: Number(authDetails.id)},
        })
        .then(dbResponse => res.json({ data: dbResponse }))
    } 
    catch (error) {
        res.status(401).json({ msg: "No favourites were found" })
    }
}
*/

