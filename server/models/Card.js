const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the card schema
const cardSchema = new Schema(
  {
    src: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
); // `timestamps` will add createdAt and updatedAt fields

// Create the Card model
const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
