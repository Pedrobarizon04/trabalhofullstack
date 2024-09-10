const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize('trabalhofullstack', 'postgres', 'Pedrobarizon11', {
  host: 'localhost',
  dialect: 'postgres',
});

const Pessoa = sequelize.define('Pessoa', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

sequelize.sync()
  .then(() => console.log('Database & tables created!'));

app.post('/pessoas', async (req, res) => {
  try {
    const { nome, cpf, telefone } = req.body;
    const pessoa = await Pessoa.create({ nome, cpf, telefone });
    res.status(201).json(pessoa);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create pessoa' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
