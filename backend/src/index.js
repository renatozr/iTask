require('dotenv/config');
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const errorMiddleware = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
