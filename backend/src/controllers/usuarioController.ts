import { getUserByEmail } from '../services/usuarioService';
import { comparePassword } from '../utils/hash';
import { generateToken } from '../utils/token';
import { Request, Response } from 'express';

export async function login(req: Request, res: Response) {
    const { email, senha } = req.body;
    const usuario = await getUserByEmail(email);

    if (!usuario) {
        return res.status(401).json({ erro: 'Usuário ou senha inválidos' });
    }

    const senhaValida = await comparePassword(senha, usuario.senha);
    if (!senhaValida) {
        return res.status(401).json({ erro: 'Usuário ou senha inválidos' });
    }

    const token = generateToken({ id: usuario.id, email: usuario.email });
    return res.json({ usuario, token });
}