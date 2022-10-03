"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controller/userController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/register', userController_1.default.register);
router.post('/login', userController_1.default.login);
router.get('/profile', userController_1.default.profile);
router.get('/', userController_1.default.getall);
router.get('/:id', userController_1.default.getone);
router.put('/forgotpass/:id', userController_1.default.changePass);
exports.default = router;
//# sourceMappingURL=User.js.map