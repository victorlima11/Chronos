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

    static async findUserById(id: string): Promise<Usuario | null> {
        const result = await db.query<Usuario>(`
      SELECT * FROM usuarios WHERE id = $1;
    `, [id]);

        return result.rows[0] || null;
    }

    static async findAllUsers(): Promise<Usuario[] | []> {
        const result = await db.query<Usuario>(`
      SELECT * FROM usuarios;
    `);

        return result.rows;
    }

    static async deleteUser(id: string): Promise<void> {
        await db.query(`
      DELETE FROM usuarios WHERE id = $1;
    `, [id]);
    }

    static async deleteUserByEmail(email: string): Promise<void> {
        await db.query(`
      DELETE FROM usuarios WHERE email = $1;
    `, [email]);
    }

    static async updateUser(id: string, usuario: Partial<NovoUsuario>): Promise<Usuario | null> {
        const { nome, email, senha } = usuario;

        const result = await db.query<Usuario>(`
      UPDATE usuarios
      SET nome = COALESCE($1, nome),
          email = COALESCE($2, email),
          senha = COALESCE($3, senha)
      WHERE id = $4
      RETURNING *;
    `, [nome, email, senha, id]);

        return result.rows[0] || null;
    }
}
