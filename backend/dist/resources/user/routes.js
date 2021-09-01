"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const userRouter = (0, express_1.Router)();
userRouter.get("/:id", controller_1.getOneUser);
userRouter.post("/", controller_1.createUser);
exports.default = userRouter;
