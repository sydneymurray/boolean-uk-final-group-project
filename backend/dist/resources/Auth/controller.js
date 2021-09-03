"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.loginUser = void 0;
const service_1 = require("./service");
const JWTGenerator_1 = require("../../utils/JWTGenerator");
const service_2 = require("./service");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loginDetails = req.body;
    try {
        const loggedUser = yield (0, service_1.findUserWithValidation)(loginDetails);
        const token = (0, JWTGenerator_1.createToken)({ id: loggedUser.id, username: loggedUser.username });
        res.cookie("token", token, { httpOnly: true });
        res.json({ user: { id: loggedUser.id, username: loggedUser.username } });
    }
    catch (error) {
        res.status(401).json({ msg: error.message });
    }
});
exports.loginUser = loginUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = req.body;
    const savedUser = yield service_2.user.create({ data: newUser });
    const token = (0, JWTGenerator_1.createToken)({ id: savedUser.id, username: savedUser.username });
    res.cookie("token", token, { httpOnly: true });
    res.json({ user: { id: savedUser.id, username: savedUser.username } });
});
exports.createUser = createUser;
