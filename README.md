# iTask
Full Stack Todo List

## Clonar o projeto
```
git clone git@github.com:renatozr/iTask.git
cd iTask
```

## Iniciar o Backend - ![É preciso ter o MySql instalado e rodando](https://dev.mysql.com/doc/refman/8.0/en/installing.html)
### Instalar as dependências
```
cd backend
npm install
```
### Configurar variaveis de ambiente
Renomeie o arquivo .env.example para .env e preencha-o com os devidos valores
```
// Exemplo
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=12345
PORT=3001
```
### Rodar o servidor 
```
npm start
```

## Iniciar o Frontend - Em outro terminal na pasta raiz do projeto
### Instalar as dependências
```
cd front end
npm install
```
### Rodar aplicativo react
```
npm start
```