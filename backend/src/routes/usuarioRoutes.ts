import express from "express";
import { login, register } from "../controllers/usuarioController";
import { validateUserLogin, validateUserRegister } from "../middlewares/usuarioMiddleware";
import { Router } from "express";
const router: Router = express.Router();

/**
 * @openapi
 * /api/login:
 *   post:
 *     summary: Faz login de um usuário
 *     tags:
 *      - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *             required:
 *               - email
 *               - senha
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       400:
 *         description: Dados incompletos ou inválidos
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/login", validateUserLogin, login);
/**
 * @openapi
 * /api/register:
 *   post:
 *     summary: Faz cadastro do usuário
 *     tags:
 *      - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *             required:
 *               - email
 *               - senha
 *               - nome
 *     responses:
 *       201:
 *         description: Cadastro realizado com sucesso
 *       400:
 *         description: Dados incompletos ou inválidos
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/register", validateUserRegister, register);

export default router;