const mongoose = require('mongoose');

const { Schema } = mongoose;

const { serviceSchema } = require('./Service');

const partySchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  budget: { type: Number, required: true },
  services: { type: [serviceSchema] },
}, {timestamps: true}); // salva a data de criação do registro e data de atualização

const Party = mongoose.model("Party", partySchema);

module.exports = Party;