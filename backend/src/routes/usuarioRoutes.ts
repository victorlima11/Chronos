import express from "express";
import { login, register } from "../controllers/usuarioController";
import { validateUserLogin, validateUserRegister } from "../middlewares/usuarioMiddleware";
import { Router } from "express";
const router: Router = express.Router();

router.post("/login", validateUserLogin, login);
router.post("/register", validateUserRegister, register);

export default router;