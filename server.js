const app = require("./app");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
// const DB = process.env.DATABASE_LOCAL;

// Connect with database
mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => console.log("DB connected successfully!")
);

app.listen(PORT, () => console.log(`App is running on Port ${PORT}`));
