'use strict';
const express = require('express');

// App
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to the API!"
  });
});
app.get('/dev', (req, res) => {
  res.status(200).json({
    message: "Welcome to the Dev!"
  });
});
app.get('/hello', (req, res) => {
  res.status(200).json({
    message: "Hello World!"
  });
});

module.exports = { app };