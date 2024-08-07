"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    foto: { type: String, required: true },
    name: { type: String, required: true },
    startDate: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    status: { type: String, required: true },
    password: { type: String, required: true },
});
const UserModel = (0, mongoose_1.model)("User", userSchema);
exports.default = UserModel;
