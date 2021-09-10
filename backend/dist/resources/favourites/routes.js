"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const controller_2 = require("./controller");
const controller_3 = require("./controller");
const favouritesRouter = (0, express_1.Router)();
favouritesRouter.get("/", controller_1.retrieveAll);
favouritesRouter.delete("/:id", controller_3.deleteOne);
favouritesRouter.post("/add", controller_2.createOne);
exports.default = favouritesRouter;
