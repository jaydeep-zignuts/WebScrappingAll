const express = require('express');
const app = express();
const cors=require('cors');

const PORT = process.env.PORT || 3000;
const route = require('./routes/route')(app);
const router = require('express').Router();

app.use('/', router);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});