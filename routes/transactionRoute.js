const express = require("express");
const transactionController = require("../controllers/transactionController");
const router = express.Router();

router
  .route("/")
  .get(transactionController.getTransaction)
  .post(transactionController.createTransaction);

router.route("/:id").delete(transactionController.deleteTransaction);

module.exports = router;
