# Validador de CPF

Este projeto é uma aplicação Node.js com Express para validação de números de CPF (Cadastro de Pessoas Físicas) brasileiros. Possui uma API backend e uma interface web simples para testar a validação.

## Funcionalidades
- Validação de CPF via API REST
- Interface web para testar a validação
- Código modularizado (rotas, controllers, services)

## Estrutura de Pastas
```
Cpf_Validador/
├── Index.js              # Arquivo principal do servidor
├── routes/
│   └── cpfRoutes.js      # Rotas da API
├── controllers/
│   └── cpfController.js  # Controller da validação
├── services/
│   └── cpfService.js     # Lógica de validação do CPF
├── public/
│   └── index.html        # Interface web
├── package.json
└── README.md
```

## Como rodar o projeto
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor:
   ```sh
   node Index.js
   ```
3. Acesse a interface web em:
   [http://localhost:3000](http://localhost:3000)

## Como usar a API
- **Endpoint:** `POST /api/validar-cpf`
- **Body:**
  ```json
  {
    "cpf": "529.982.247-25"
  }
  ```
- **Resposta:**
  ```json
  {
    "cpf": "529.982.247-25",
    "valido": true
  }
  ```

## Exemplo de uso com curl
```sh
curl -X POST http://localhost:3000/api/validar-cpf \
  -H "Content-Type: application/json" \
  -d '{"cpf":"529.982.247-25"}'
```

## Licença
MIT
