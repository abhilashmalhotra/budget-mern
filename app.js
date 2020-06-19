const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
// const morgan = require("morgan");
const cors = require("cors");

const AppError = require("./util/appError");
const gloableErrorHandler = require("./controllers/errorController");

// Router Import
const transactionRouter = require("./routes/transactionRoute");

// Config
dotenv.config({ path: "./config.env" });

const app = express();



app.use(cors());
// Body parser
app.use(express.json({ limit: "10kb" }));

// Middleware Routers
app.use("/api/v1/transaction", transactionRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// Error middleware
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
app.use(gloableErrorHandler);

module.exports = app;
