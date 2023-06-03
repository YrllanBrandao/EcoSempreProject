"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const article_1 = __importDefault(require("./routes/article"));
const contact_1 = __importDefault(require("./routes/contact"));
const cors_1 = __importDefault(require("cors"));
const session_1 = __importDefault(require("./auth/session"));
const createAdminUserScript_1 = __importDefault(require("./createAdminUserScript"));
// setup admin
(0, createAdminUserScript_1.default)();
const app = (0, express_1.default)();
app.use(session_1.default);
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use("/", user_1.default);
app.use("/", article_1.default);
app.use("/", contact_1.default);
exports.default = app;
