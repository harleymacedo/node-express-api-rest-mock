const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const professorRouter = require('./routes/professorRouter');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(professorRouter);

app.listen(process.env.PORT || 3000);