const dotenv = require("dotenv");
dotenv.config(); 
const express = require('express');
const mongoose = require("mongoose");

const app = express();
const PORT = 3000

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
    console.log('Connected to MongoDB');
  });

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

