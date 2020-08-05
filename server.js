const express = require("express");
const morgan = require("morgan")
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

const app = express();
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.get("/exercise", (req, res) => {
  res.sendFile(__dirname, "/exercise.html");
});

app.get("/stats", (req, res) => {
  res.sendFile(__dirname, "public/stats.html");
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });