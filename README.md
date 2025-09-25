# Banco API Tests

## 📌 Objetivo

Este projeto automatiza testes de API REST para a aplicação **Banco API**, com foco em validar endpoints, fluxos de autenticação e transferências entre contas.

---

## 🚀 Stack utilizada

- Node.js
- Mocha (framework de testes)
- Chai (asserções)
- Supertest (testes de endpoints HTTP)
- Mochawesome (geração de relatórios HTML/JSON)
- dotenv (carregamento de variáveis de ambiente)

---

## 📂 Estrutura de diretórios

```
banco-api-tests/
├── fixtures/                 # Dados de teste (ex.: payloads, usuários de exemplo)
├── helpers/                  # Utilitários e funções auxiliares para os testes
├── test/                     # Casos de teste
│   ├── login.test.js         # Testes de autenticação
│   └── transferencia.test.js # Testes de transferência
├── mochawesome-report/       # Relatórios gerados pelo Mochawesome (gerado automaticamente)
├── .env                      # Variáveis de ambiente (não commitadas)
├── package.json              # Dependências e scripts do projeto
├── package-lock.json
└── .gitignore
```

## ⚙️ Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com a variável abaixo (exemplo):

```ini
BASE_URL=http://localhost:3000
```

- `BASE_URL`: URL base da API que será testada (ajuste conforme o ambiente: local, staging, produção).

---

## ▶️ Instalação e execução

### 1) Instalar dependências

```bash
npm install
```

### 2) Executar todos os testes

```bash
npm test
```

Após execução com Mochawesome, o arquivo principal do relatório normalmente fica em:

```
./mochawesome-report/mochawesome.html
```

---

## 📚 Links úteis (documentação das dependências)

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/api/)
- [Supertest](https://github.com/visionmedia/supertest#api)
- [Mochawesome](https://github.com/adamgruber/mochawesome#readme)

---

## 📝 Observações finais

- Certifique-se de que a API alvo esteja rodando e acessível via `BASE_URL` antes de executar os testes.
- O diretório `mochawesome-report/` é criado automaticamente quando o Mochawesome é usado como repórter.
- Não faça commit do `.env` com valores sensíveis. Use arquivos de exemplo ou variáveis de CI/CD para ambientes compartilhados.

---