# iTask
Full Stack Todo List

## Clonar o projeto
```
git clone git@github.com:renatozr/iTask.git
cd iTask
```

## Iniciar o Backend - [É preciso ter o MySQL instalado e rodando](https://dev.mysql.com/doc/refman/8.0/en/installing.html)
### Instalar as dependências
```
cd backend
npm install
```
### Configurar as variaveis de ambiente
Renomeie o arquivo .env.example para .env e preencha os valores MYSQL_USER e MYSQL_PASSWORD
```
// Exemplo
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=12345
PORT=3001
```
### Criar o banco de dados local
Execute a as queries do `iTask_DB.sql` no seu MySQL
### Rodar o servidor 
```
npm start
```

## Iniciar o Frontend - Em outro terminal na pasta raiz do projeto
### Instalar as dependências
```
cd frontend
npm install
```
### Rodar o aplicativo React
```
npm start
```
