const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const productRoutes = require('./routes/productRoutes.js')
const mongoose = require('mongoose');
const passport = require('passport');
const passportConfig = require('./config/passport');
const authRoutes = require("./routes/authRoutes.js")

app.use(express.json());
require('dotenv').config();


const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(passport.initialize());
app.use('/api', productRoutes);
app.use('/api/auth', authRoutes);



app.get('/', (req, res) => {
  res.send('Weclome To Market Site!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})