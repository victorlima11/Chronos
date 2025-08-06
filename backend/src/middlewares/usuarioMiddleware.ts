import { Request, Response, NextFunction } from 'express';

export function validateUserRegister(req: Request, res: Response, next: NextFunction) {

    if (!req.body) {
        return res.status(400).json({ error: 'Dados do usuário são obrigatórios.' });
    }

    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    next();
};

export function validateUserLogin(req: Request, res: Response, next: NextFunction) {

    if (!req.body) {
        return res.status(400).json({ error: 'Dados do usuário são obrigatórios.' });
    }
    
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    next();
};
