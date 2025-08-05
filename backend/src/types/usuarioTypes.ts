export interface NovoUsuario {
    nome: string;
    email: string;
    senha: string;
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  criado_em: Date;
}
