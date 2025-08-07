CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS usuarios (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha TEXT NOT NULL,
  criado_em TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS pagamentos (
  id SERIAL PRIMARY KEY,
  usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  valor DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) NOT NULL,
  metodo_pagamento VARCHAR(50) NOT NULL,
  criado_em TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS servicos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT,
  preco DECIMAL(10, 2) NOT NULL,
  ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS horarios_disponiveis (
  id SERIAL PRIMARY KEY,
  dia_semana INTEGER NOT NULL CHECK (dia_semana >= 0 AND dia_semana <= 6),
  hora_inicio TIME NOT NULL,
  hora_fim TIME NOT NULL
);

CREATE TABLE IF NOT EXISTS agendamentos (
  id SERIAL PRIMARY KEY,
  usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  servico_id INTEGER REFERENCES servicos(id) ON DELETE SET NULL,
  data_agendamento DATE NOT NULL,
  horario TIME NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'pendente',
  criado_em TIMESTAMP DEFAULT now()
);

-- Evita agendamentos duplicados no mesmo horário
CREATE UNIQUE INDEX idx_agendamento_unico
ON agendamentos (data_agendamento, horario);

-- Email único para usuários
CREATE UNIQUE INDEX idx_email_usuarios ON usuarios(email);