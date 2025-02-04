const mongoose = require("mongoose");

const fruitsSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
})

const Fruit = mongoose.model("fruit", fruitsSchema)

module.exports = Fruit