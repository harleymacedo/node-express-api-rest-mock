const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const alunoRouter = require('./routes/alunoRouter');

app.use(express.json());
app.use(alunoRouter);

app.listen(process.env.PORT || 3000);