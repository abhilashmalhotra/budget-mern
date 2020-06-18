const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Transaction title is required"],
  },
  amount: {
    type: Number,
    required: [true, "Transaction amount is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
