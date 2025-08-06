import { UsuarioRepository } from '../repositories/usuarioRepository';
import { NovoUsuario } from '../types/usuarioTypes';
import { hashPassword } from '../utils/hash';

export async function createUser(usuario: NovoUsuario) {
    const exists = await UsuarioRepository.findUserByEmail(usuario.email);
    if (exists) {
        throw new Error('Usuário já cadastrado com este e-mail');
    }

    const senhaHash = await hashPassword(usuario.senha);
    return UsuarioRepository.createUser({
        ...usuario,
        senha: senhaHash
    });
}

export async function getAllUsers() {
    return UsuarioRepository.findAllUsers();
}

export async function getUserById(id: string) {
    return UsuarioRepository.findUserById(id);
}

export async function getUserByEmail(email: string) {
    return UsuarioRepository.findUserByEmail(email);
}

export async function updateUser(id: string, usuario: Partial<NovoUsuario>) {
    if (usuario.senha) {
        usuario.senha = await hashPassword(usuario.senha);
    }
    return UsuarioRepository.updateUser(id, usuario);
}

export async function deleteUserByEmail(email: string) {
    return UsuarioRepository.deleteUserByEmail(email);
}

export async function deleteUserById(id: string) {
    return UsuarioRepository.deleteUser(id);
}