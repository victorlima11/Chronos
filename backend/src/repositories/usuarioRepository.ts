import { db } from '../config/db';
import { NovoUsuario } from '../types/usuarioTypes';
import { Usuario } from '../types/usuarioTypes';

export class UsuarioRepository {
  static async createUser(usuario: NovoUsuario): Promise<Usuario> {
    const { nome, email, senha } = usuario;

    const result = await db.query<Usuario>(`
      INSERT INTO usuarios (nome, email, senha)
      VALUES ($1, $2, $3)
      RETURNING *;
    `, [nome, email, senha]);

    return result.rows[0];
  }

  static async findUserByEmail(email: string): Promise<Usuario | null> {
    const result = await db.query<Usuario>(`
      SELECT * FROM usuarios WHERE email = $1;
    `, [email]);

    return result.rows[0] || null;
  }
}
