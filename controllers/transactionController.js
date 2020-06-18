const Transaction = require("../models/transactionModel");

// Util imports for error
const catchAsync = require("../util/catchAsync");
const AppError = require("../util/appError");

// Create new transaction
module.exports.createTransaction = catchAsync(async (req, res, next) => {
  const transation = await Transaction.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      transation,
    },
  });
});

// Get All Transations
module.exports.getTransaction = catchAsync(async (req, res, next) => {
  const transactions = await Transaction.find();

  res.status(200).json({
    status: "success",
    count: transactions.length,
    data: {
      transactions,
    },
  });
});

// Delete Transactions
module.exports.deleteTransaction = catchAsync(async (req, res, next) => {
  await Transaction.findOneAndDelete({ _id: req.params.id });
  res.status(204).json({
    status: "success",
    transaction: null,
  });
});
