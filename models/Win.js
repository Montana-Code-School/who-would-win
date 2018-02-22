const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const winSchema = new Schema({
  fish: Number,
  dogs: Number,
  cats: Number,
  dinosaurs: Number,
  birds: Number,
  rodents: Number,
  reptiles: Number,
  insects: Number,
  primate: Number,
});

module.exports = mongoose.model('Win', winSchema);
