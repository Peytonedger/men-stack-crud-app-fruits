const dotenv = require("dotenv");
dotenv.config(); 
const express = require('express');
const mongoose = require("mongoose");
const methodOverride = require("method-override"); 
const morgan = require("morgan"); 


const app = express();
const PORT = 3000

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
    console.log('Connected to MongoDB');
  });

const Fruit = require("./models/fruit")

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('fruit/new', () => {
  res.render("fruits/new.ejs")
})

app.post('/fruit', (req, res) => {
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }
  Fruit.create(req.body)
  res.redirect("/fruits/new")
});

app.get('fruits', async (req, res) => {
  const allFruits = await Fruit.find()
  console.log(allFruits);
  res.render('fruits/index.ejs', {fruits: allFruits})
  
});

app.get("/fruits/:fruitId", async (req, res) => {
  const fruit = await fruit.findById(req.params.fruitId)
  res.render("fruits/show.ejs", {fruit: fruit});
});

app.delete("/fruits/:fruitId", async (req, res) => {
  await Fruit.findByIdAndDelete(req.params.fruitId)
res.send("bye bye fruit")
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

