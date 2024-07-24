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
exports.deleteUser = exports.updateUser = exports.createUsers = exports.createUser = exports.userById = exports.allUsers = void 0;
//import dataUsers from "../data/users.json"
const userModel_1 = __importDefault(require("../models/userModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
//const users: DataUsers[] = dataUsers
const allUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield userModel_1.default.find();
    // console.log(allUsers);
    return allUsers;
});
exports.allUsers = allUsers;
const userById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.default.findById(id);
    if (!user) {
        throw new Error("Cannont find users");
    }
    return user;
});
exports.userById = userById;
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(user.password);
    const hasPassword = yield bcrypt_1.default.hash(user.password, 10);
    const newUser = new userModel_1.default(Object.assign(Object.assign({}, user), { password: hasPassword }));
    newUser.save();
});
exports.createUser = createUser;
const createUsers = (users) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedUsers = yield Promise.all(users.map((user) => __awaiter(void 0, void 0, void 0, function* () {
        const hashedPassword = yield bcrypt_1.default.hash(user.password, 10);
        return Object.assign(Object.assign({}, user), { password: hashedPassword });
    })));
    const createdUsers = yield userModel_1.default.insertMany(hashedUsers);
    return createdUsers;
});
exports.createUsers = createUsers;
const updateUser = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    const objectId = new mongoose_1.default.Types.ObjectId(id);
    yield userModel_1.default.updateOne({ _id: objectId }, body);
    const updatedUser = yield userModel_1.default.findById(objectId);
    return updatedUser;
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const objectId = new mongoose_1.default.Types.ObjectId(id);
    const delUser = yield userModel_1.default.findByIdAndDelete(objectId);
    return delUser;
});
exports.deleteUser = deleteUser;