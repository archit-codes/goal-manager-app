const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const goalRoutes = require("./routes/goalRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/goalsdb")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use("/goals", goalRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});