# 🏥 SGHSS - Sistema de Gestão Hospitalar e de Serviços de Saúde

Projeto desenvolvido como **Trabalho de Conclusão de Curso (TCC)** da graduação em **Análise e Desenvolvimento de Sistemas pela UNINTER**.

O SGHSS é uma aplicação web desenvolvida para simular funcionalidades básicas de gerenciamento de uma clínica ou ambiente hospitalar.

O sistema permite realizar login, agendar consultas, visualizar consultas cadastradas e acessar informações do prontuário do paciente.

O objetivo do projeto é aplicar conceitos de **desenvolvimento front-end**, lógica de programação e manipulação de dados no navegador, criando uma interface funcional, organizada e intuitiva.

---

## 🚀 Funcionalidades

### 🔐 Login

- Validação de e-mail e senha.
- Validação de campos obrigatórios.
- Exibição dinâmica de mensagens de erro e sucesso.
- Simulação de autenticação de usuário.

### 📅 Agendamento de Consultas

- Formulário para agendamento de consultas.
- Preenchimento das informações da consulta.
- Validação de campos obrigatórios.
- Armazenamento local das informações utilizando o navegador.

### 📋 Consultas Agendadas

- Exibição das consultas em formato de tabela.
- Carregamento dinâmico das informações utilizando JavaScript.
- Recuperação dos dados armazenados no navegador.

### 🩺 Prontuário do Paciente

- Exibição das informações do paciente.
- Visualização de dados como nome, histórico e data de nascimento.
- Integração com informações relacionadas às consultas.
- Estrutura preparada para futuras funcionalidades de edição do prontuário.

---

## 🔐 Acesso para demonstração

Para testar o login do sistema, podem ser utilizadas as seguintes credenciais fictícias:

**E-mail:** administrador@vidaplus.com  
**Senha:** 123456

> As credenciais acima são fictícias e foram criadas exclusivamente para demonstração acadêmica do projeto.

---

## 💻 Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Boxicons

### Armazenamento

- LocalStorage

### Versionamento

- Git
- GitHub

---

## 📂 Estrutura do Projeto

```text
Projeto-SGHSS-ads/
│
├── imagens/
├── js/
│
├── index.html
├── agendamento.html
├── consulta.html
├── prontuario.html
├── style.css
└── README.md
