const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port: ${PORT}`);
});

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  err => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

const userRouter = require("./routes/userRouter");
app.use("/users", userRouter);

const restaurantRouter = require("./routes/restaurantRouter");
app.use("/restaurants", restaurantRouter);

const orderRouter = require("./routes/orderRouter");
app.use("/order", orderRouter);
