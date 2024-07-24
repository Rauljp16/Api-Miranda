"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const roomControllers_1 = __importDefault(require("./controllers/roomControllers"));
const bookingControllers_1 = __importDefault(require("./controllers/bookingControllers"));
const userControllers_1 = __importDefault(require("./controllers/userControllers"));
const contactControllers_1 = __importDefault(require("./controllers/contactControllers"));
const loginControllers_1 = __importDefault(require("./controllers/loginControllers"));
const auth_1 = __importDefault(require("./middleware/auth"));
const path_1 = __importDefault(require("path"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.get("/", (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'index.html'));
});
exports.app.use("/login", loginControllers_1.default);
exports.app.use(auth_1.default);
exports.app.use("/rooms", roomControllers_1.default);
exports.app.use("/bookings", bookingControllers_1.default);
exports.app.use("/users", userControllers_1.default);
exports.app.use("/contact", contactControllers_1.default);
exports.app.use((err, _req, res, _Next) => {
    console.error(err);
    return res.status(401).json({ error: true, message: "Aplications error" });
});
