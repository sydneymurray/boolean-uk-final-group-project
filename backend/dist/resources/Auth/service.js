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
exports.findUserWithValidation = void 0;
const client_1 = __importDefault(require("../../utils/client"));
const bcrypt_1 = require("bcrypt");
const findUserWithValidation = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const userDataFromDB = yield client_1.default.user.findUnique({
        where: {
            email: userData.email
        }
    });
    if (!userDataFromDB)
        throw new Error("Username/Password is incorrect");
    const isPasswordValid = yield (0, bcrypt_1.compare)(userData.password, userDataFromDB.password);
    if (!isPasswordValid)
        throw new Error("Username/Password is incorrect");
    return userDataFromDB;
});
exports.findUserWithValidation = findUserWithValidation;
