# Sistema de Gestão de Academia (Microsserviços)

Este projeto demonstra a implementação de uma arquitetura de **Microsserviços** utilizando **Node.js**, **Docker** e um **API Gateway**. O sistema simula a gestão de uma academia, dividindo responsabilidades entre servidores independentes.

---

## Arquitetura do Sistema

O ecossistema é composto por 4 serviços isolados que se comunicam via rede virtualizada pelo Docker:

* **API Gateway (Porta 3002):** Ponto de entrada único. Resolve o **CORS** e realiza o roteamento dinâmico para os serviços internos.
* **Members Service (Porta 3003):** Gerencia o cadastro (POST) e a listagem (GET) de alunos.
* **Workout Service (Porta 3004):** Gerencia as fichas de exercícios e treinos.
* **Access Service (Porta 3001):** Controla o histórico de entradas e acessos.

---

## Tecnologias e Conceitos

### 1. Docker & Docker Compose
Cada serviço possui seu próprio `Dockerfile` (baseado em `node:18-slim`). O arquivo `docker-compose.yml` na raiz coordena a inicialização de todos os containers, garantindo que as dependências sejam instaladas isoladamente via `npm install` dentro de cada imagem.

### 2. API Gateway & Proxy
Utilizamos o `express-http-proxy` para redirecionar as chamadas do cliente. Implementamos o `proxyReqPathResolver` para garantir que as rotas internas (ex: `/members`) fossem mapeadas corretamente, evitando erros de roteamento no redirecionamento.

### 3. CORS (Cross-Origin Resource Sharing)
Para permitir que o **Frontend** (HTML/JS) consumisse as APIs de diferentes portas, implementamos o middleware `cors` em todos os serviços, liberando o acesso seguro entre as origens.

### 4. Frontend Integrado
Uma interface simples em HTML/JavaScript que utiliza a **Fetch API** com funções assíncronas (`async/await`) para registrar alunos e atualizar a lista em tempo real sem recarregar a página.

---

## Como Executar

1.  **Docker instalado no seu sistema.**
2.  **Clone o repositório e acesse a pasta:**
    ```bash
    git clone [https://github.com/Joviviz/gym-system-microservices.git](https://github.com/Joviviz/gym-system-microservices.git)
    cd gym-system-microservices
    ``` 
3.  **Suba os serviços:**
    ```bash
    sudo docker compose up --build
    ```
4.  **Acesse o sistema:**
    * **Backend (JSON):** [http://localhost:3002/members](http://localhost:3002/members)
    * **Frontend:** Abra o arquivo `frontend/index.html` no seu navegador.
