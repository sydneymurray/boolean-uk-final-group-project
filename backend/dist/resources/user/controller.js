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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getOneUser = void 0;
const service_1 = __importDefault(require("./service"));
const JWTGenerator_1 = require("../../utils/JWTGenerator");
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const currentUser = yield service_1.default.findUnique({
        where: { id }
    });
    res.json({ data: currentUser });
});
exports.getOneUser = getOneUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = req.body;
    const savedUser = yield service_1.default.create({ data: newUser });
    const token = (0, JWTGenerator_1.createToken)({ id: savedUser.id, username: savedUser.username });
    res.cookie("token", token, { httpOnly: true });
    res.json({ user: { id: savedUser.id, username: savedUser.username } });
});
exports.createUser = createUser;
