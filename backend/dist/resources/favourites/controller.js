"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.retrieveAll = exports.createOne = void 0;
const client_1 = __importDefault(require("../../utils/client"));
function createOne(req, res) {
    let authDetails = req.currentUser;
    try {
        client_1.default.favourites.create({ data: {
                user: Number(authDetails.id),
                listing: Number(req.body.listing)
            } })
            .then(dbResponse => res.json(dbResponse));
    }
    catch (error) {
        res.status(500).json({ msg: "Data was not saved due to a problem" });
    }
}
exports.createOne = createOne;
function retrieveAll(req, res) {
    const authDetails = req.currentUser;
    try {
        client_1.default.favourites.findMany({
            include: { Listings: { include: { Track: true } } },
            where: { user: Number(authDetails.id) },
        })
            .then(dbResponse => res.json({ data: dbResponse }));
    }
    catch (error) {
        res.status(401).json({ msg: "No favourites were found" });
    }
}
exports.retrieveAll = retrieveAll;
function deleteOne(req, res) {
    const authDetails = req.currentUser;
    try {
        client_1.default.favourites.delete({
            where: { id: Number(req.params.id) },
        })
            .then(dbResponse => res.json({ data: dbResponse }));
    }
    catch (error) {
        res.status(401).json({ msg: "No favourite to delete was found" });
    }
}
exports.deleteOne = deleteOne;
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
