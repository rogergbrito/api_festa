const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect('mongodb+srv://rogerbrito:JlHqpA2bBeUB9F4r@cursojs01.iacxlh7.mongodb.net/?retryWrites=true&w=majority');
    console.log("Conectei ao banco!");
  } catch (err) {
      console.log(`Erro: ${err}`);
  }
}

module.exports = main;