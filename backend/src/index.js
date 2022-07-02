require('dotenv/config');
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => res.status(200).json({ message: 'OK!' }));

app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
