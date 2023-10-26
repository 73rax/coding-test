require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const userRoutes = require('./routes/user-routes');
const cors = require('cors');
const { connectToMongoDB } = require("./database");


connectToMongoDB();

app.use(express.json());

app.use(cors());

app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});