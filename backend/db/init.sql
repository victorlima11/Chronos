CREATE TABLE IF NOT EXISTS usuarios (
  id UUID PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha TEXT NOT NULL,
  criado_em TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS planos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  preco_mensal DECIMAL(10, 2) NOT NULL,
  descricao TEXT,
  ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS empresas (
  id UUID PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cnpj VARCHAR(20) UNIQUE NOT NULL,
  endereco TEXT,
  senha TEXT NOT NULL,
  telefone VARCHAR(15),
  ativo BOOLEAN DEFAULT TRUE,
  plano_id INTEGER REFERENCES planos(id),
  email VARCHAR(100) UNIQUE NOT NULL,
  criado_em TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS pagamentos (
  id SERIAL PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE,
  valor DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) NOT NULL,
  metodo_pagamento VARCHAR(50) NOT NULL,
  criado_em TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS servicos (
  id SERIAL PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT,
  preco DECIMAL(10, 2) NOT NULL,
  ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS horarios_disponiveis (
  id SERIAL PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE,
  dia_semana INTEGER NOT NULL CHECK (dia_semana >= 0 AND dia_semana <= 6),
  hora_inicio TIME NOT NULL,
  hora_fim TIME NOT NULL
);

CREATE TABLE IF NOT EXISTS agendamentos (
  id SERIAL PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id) ON DELETE CASCADE,
  usuario_id UUID REFERENCES usuarios(id) ON DELETE SET NULL,
  servico_id INTEGER REFERENCES servicos(id) ON DELETE SET NULL,
  data_agendamento DATE NOT NULL,
  horario TIME NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'pendente',
  criado_em TIMESTAMP DEFAULT now()
);

-- Evita agendamentos duplicados no mesmo horário
CREATE UNIQUE INDEX idx_agendamento_unico
ON agendamentos (empresa_id, data_agendamento, horario);

-- Email único para usuários e empresas
CREATE UNIQUE INDEX idx_email_usuarios ON usuarios(email);
CREATE UNIQUE INDEX idx_email_empresas ON empresas(email);