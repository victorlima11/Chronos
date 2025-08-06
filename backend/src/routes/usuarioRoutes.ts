import express from "express";
import { login, register } from "../controllers/usuarioController";
import { Router } from "express";
const router: Router = express.Router();

router.post("/login", login);
router.post("/register", register);

export default router;