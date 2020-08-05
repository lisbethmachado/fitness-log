const express = require("express");
const {join} = require('path')
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
app.use(express.static(join(__dirname, 'public')))


app.get('/', (request, response) => {
  response.sendFile(join(__dirname, 'public', 'index.html'))
});

app.get('/exercise', (request, response) => {
  response.sendFile(join(__dirname, 'public', 'exercise.html'))
});

app.get('/stats', (request, response) => {
  response.sendFile(join(__dirname, 'public', 'stats.html'))
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });